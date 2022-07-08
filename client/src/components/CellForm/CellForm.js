import React from "react";
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
  TextArea
} from "grommet";
import { Close, Send, User } from 'grommet-icons';

export const CellForm = ({setOpen, data}) => {
  return (
    <Form
      onSubmit={({ value }) => {
        console.log(value);
      }}
    >
      <FormField name="name" htmlFor="textinput-id" label="Choose an Emoji">
      <Box align="center" pad="large">      
      <Box direction="row">
        <Button label="1"></Button>
        <Button label="2"></Button>
        <Button label="3"></Button>
        <Button label="4"></Button>
        <Button label="5"></Button>
      </Box>
  </Box>
      </FormField>

      <FormField name="dailyNote" htmlFor="dailyNote" label="How was your day?">
      <TextArea name="dailyNote"/>
      </FormField>
    
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
        <Button type="close" onBlur={() => setOpen(false)} label="Close" />
      </Box>
    </Form>
  );
};
