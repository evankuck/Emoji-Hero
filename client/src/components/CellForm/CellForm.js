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
} from "grommet";

export const CellForm = () => {
  return (
    <Form
      onSubmit={({ value }) => {
        console.log(value);
      }}
    >
      <FormField name="name" htmlFor="textinput-id" label="Choose an Emoji">
        <TextInput id="textinput-id" name="emoji" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
};
