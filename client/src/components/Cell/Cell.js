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
import { CellForm } from "../CellForm/CellForm";

export const Cell = (props) => {
  const { isSelected, onSelect, selected, date, day, hasContent } = props;

  return (
    <Box
      background={isSelected ? "light-3" : "white"}
      onClick={() => onSelect(date.toISOString())}
      border
      fill
    >
      {/* <Stack anchor="top-right" fill> */}

      {/* {hasContent ? ( */}
      <DropButton
        open={isSelected}
        icon={
          <Box pad="small" align="center" justify="center" fill>
            <Text size="large">{day}</Text>
          </Box>
        }
        dropContent={
          <Box pad="large">
            <CellForm />
          </Box>
        }
        dropAlign={{
          top: "bottom",
        }}
      />
      {/* ) : null} */}
      {/* </Stack> */}
    </Box>
  );
};
