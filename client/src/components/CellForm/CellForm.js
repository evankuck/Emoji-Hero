import React from "react";
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
} from "grommet";
import { Close, Send, User } from "grommet-icons";

export const CellForm = ({ setOpen, data }) => {
  
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

  const [
    createDayFunction, { data: createDayData, loading: createDayLoading, error: createDayError },
  ] = useMutation(CREATE_DAY);

  const [
    updateDayFunction, { data: updateDayData, loading: updateDayLoading, error: updateDayError },
  ] = useMutation(UPDATE_DAY);

  const [
    deleteDayFunction, { data: deleteDayData, loading: deleteDayLoading , error: deleteDayError },
  ] = useMutation(DELETE_DAY);
  
  return (
    <Form
      onSubmit={({ value }) => {
        console.log(value);
      }}
    >
      <FormField name="name" htmlFor="textinput-id" label="Choose an Emoji">
        <Box align="center" pad="large">
          <Box direction="row">
            <Button 
              label="🙂"
              // U+1F642
            ></Button>
            <Button 
              label="😑"
              // U+1F611
            ></Button>
            <Button 
              label="😭"
              // U+1F62D
            ></Button>
            <Button 
              label="🤢"
              // U+1F922
            ></Button>
            <Button 
              label="🤬"
              // U+1F92C
            ></Button>
          </Box>
        </Box>
      </FormField>

      {/* <FormField name="dailyNote" htmlFor="dailyNote" label="How was your day?">
      <TextArea name="dailyNote"/>
      </FormField> */}

      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
        <Button type="close" onBlur={() => setOpen(false)} label="Close" />
      </Box>
    </Form>
  );
};
