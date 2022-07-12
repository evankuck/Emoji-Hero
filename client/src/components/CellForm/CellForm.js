import { React, useContext, useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Grommet,
  Form,
  Box,
  Calendar,
  DropButton,
  Heading,
  Stack,
  Text,
  FormField,
  TextInput,
  Button,
  TextArea,
  RadioButton,
  Select,
} from "grommet";
import { Close, Send, User } from "grommet-icons";
import { UserContext } from "../../context/UserContext";

export const CellForm = ({ setOpen, data, date }) => {
  const CREATE_DAY = gql`
    mutation Mutation($emoji: String!, $date: String!, $userId: String!) {
      createDay(emoji: $emoji, date: $date, userId: $userId) {
        _id
        emoji
        date
        userId
      }
    }
  `;

  const UPDATE_DAY = gql`
    mutation Mutation($id: String!) {
      updateDay(_id: $id) {
        _id
        emoji
        date
        userId
      }
    }
  `;

  const DELETE_DAY = gql`
    mutation Mutation($id: String!) {
      deleteDay(_id: $id) {
        _id
        emoji
        date
        userId
      }
    }
  `;
  const { _id: userId } = useContext(UserContext);

  const [
    createDayFunction,
    { data: createDayData, loading: createDayLoading, error: createDayError },
  ] = useMutation(CREATE_DAY);

  const [
    updateDayFunction,
    { data: updateDayData, loading: updateDayLoading, error: updateDayError },
  ] = useMutation(UPDATE_DAY);

  const [
    deleteDayFunction,
    { data: deleteDayData, loading: deleteDayLoading, error: deleteDayError },
  ] = useMutation(DELETE_DAY);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("you clicked submit");
  }

  const [emoji, setEmoji] = useState("🙂");

  // this is for debugging
  useEffect(() => {
    if (createDayError) {
      console.log(createDayError);
    }
    if (updateDayError) {
      console.log(updateDayError);
    }
    if (deleteDayError) {
      console.log(deleteDayError);
    }
  }, [createDayError, updateDayError, deleteDayError]);

  useEffect(() => {
    if (createDayData) {
      console.log(createDayData);
    }
    if (updateDayData) {
      console.log(updateDayData);
    }
    if (deleteDayData) {
      console.log(deleteDayData);
    }
  }, [createDayData, updateDayData, deleteDayData]);
 
 
  return (
    <Form
      // value = {value}
      // onChange = {nextValue => setValue(nextValue)}
      // onReset = {() => setValue({})}
      onSubmit={({ value }) => {
        if (data._id) {
          updateDayFunction({
            variables: {
              id: data._id,
              emoji: emoji,
            },
          });
        } else if (emoji) {
          createDayFunction({
            variables: {
              emoji: emoji,
              date: date,
              userId: userId,
            },
          });
        }
      }}
      
    >
      <FormField name="emoji" htmlFor="textinput-id" label="Choose an Emoji">
        <Box align="center" pad="large">
          <Box direction="row">
            <Select
              name="emoji"
              id="select-emoji"
              placeholder="Select an emoji"
              options={[
                "🙂",
                "😑",
                "😢",
                "😭",
                "😱",
                "😳",
                "😵",
                "😡",
                "😠",
                "😤",
              ]}
              value={emoji}
              onChange={({ option }) => {
                console.log(option);
                setEmoji(option);
              }}
            />
          </Box>
        </Box>
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="button" label="Update" onClick={updateDayFunction({
            variables: {
              emoji: emoji,
              date: date,
              userId: userId
            },
          })} />
        <Button type="button" label="Delete" onClick={deleteDayFunction({
            variables: {
              emoji:emoji,
              date: date,
              userId: userId
            },
          })}
           />
        <Button type="button" onClick={() => setOpen(false)} label="Close" />
      </Box>
    </Form>
  );
};
