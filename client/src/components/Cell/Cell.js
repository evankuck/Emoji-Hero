import React, { useState } from "react";

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
import { Notification } from "grommet-icons";

export const Cell = (props) => {
  const { isSelected, onSelect, date, day, hasContent } = props;

  return (
    <Box
      background={isSelected ? "light-3" : "white"}
      onClick={() => onSelect(date.toISOString())}
      border
      fill
    >
      <Stack anchor="top-right" fill>
        <Box pad="small" align="center" justify="center" fill>
          <Text size="large">{day}</Text>
        </Box>

        {hasContent ? (
          <DropButton
            icon={<Notification size="small" color="neutral-3" />}
            open /* INSERT BOOLEAN TO MAKE ONLY ONE DROPE BUTTON OPEN AT A TIME */
            dropContent={
              <Box pad="large">
                <Form onSubmit={({ value }) => {console.log(value)}}>
                  <FormField name="name" htmlFor="textinput-id" label="Choose an Emoji">
                    <TextInput id="textinput-id" name="emoji" />
                  </FormField>
                  <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                  </Box>
                </Form>
              </Box>
            }
            dropAlign={{
              top: "bottom",
            }}
          />
        ) : null}
      </Stack>
    </Box>
  );
};
