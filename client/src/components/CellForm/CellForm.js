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
  TextArea,
} from "grommet";


export const CellForm = ({ setOpen, data }) => {
  const getEmoji = (e) => {
    const selectedEmoji = e.target.value;
    return selectedEmoji;
  };

  return (
    <Form
      onSubmit={({ value }) => {
        console.log(value);
      }}
    >
      <FormField name="emoji" htmlFor="emoji-button" label="Choose an Emoji">
        <Box align="center" pad="large">
          <Box direction="row">
            <Button label="1" type="submit" value="emoji-1"></Button>
            <Button label="2" type="submit" value="emoji-2"></Button>
            <Button label="3" type="submit" value="emoji-3"></Button>
            <Button label="4" type="submit" value="emoji-4"></Button>
            <Button label="5" type="submit" value="emoji-5"></Button>
          </Box>
        </Box>
      </FormField>

      <FormField name="dailyNote" htmlFor="dailyNote" label="How was your day?">
        <TextArea name="dailyNote" />
      </FormField>

      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
        <Button type="submit" onBlur={() => setOpen(false)} label="Close" />
      </Box>
    </Form>
  );
};
