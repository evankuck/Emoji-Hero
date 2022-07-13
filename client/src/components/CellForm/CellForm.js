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

export const CellForm = ({ emoji, setEmoji, setOpen, data, date }) => {
  const [cellData, setCellData] = useState({...data});
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
    mutation Mutation($emoji: String, $id: String!) {
      updateDay(emoji: $emoji, _id: $id) {
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

  const [text, setText] = useState("");
  // const [emoji, setEmoji] = useState("🙂");

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
      setCellData(createDayData.createDay)
    }
    if (updateDayData) {
      console.log(updateDayData);
    }
    if (deleteDayData) {
      console.log(deleteDayData);
    }
  }, [createDayData, updateDayData, deleteDayData]);

  return (
    <Form>
      <FormField name="emoji" htmlFor="textinput-id" label="Choose an Emoji">
        <TextInput placeholder="I'm feeling..." value={text} onChange={event => setText(event.target.value)} />;
        <Text>{`${date.toDateString()}`}</Text>
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
        <Button
          type="button"
          primary
          label="Submit"
          onClick={() => {
            if (data._id) {
              updateDayFunction({
                variables: {
                  id: data._id,
                  emoji: emoji,
                  text: text
                },
              });
            } else if (emoji) {
              createDayFunction({
                variables: {
                  emoji: emoji,
                  date: date,
                  userId: userId,
                  text: text,
                },
              });
            }
            setOpen(false);
          }}
        />
        <Button
          type="button"
          label="Delete"
          onClick={() =>
            deleteDayFunction({
              variables: {
                id: data._id
              },
            })
          }
        />
        <Button type="button" onClick={() => setOpen(false)} label="Close" />
      </Box>
    </Form>
  );
};
