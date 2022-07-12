import React, { useEffect, useState } from "react";
import "./Cell.css";
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
  const { isSelected, onSelect, selected, date, day, hasContent, data } = props;

  return (
    <Box
      background={hasContent ? "accent-1" : "white"}
      color={hasContent ? "brand" : "text-dark-1"}
      onClick={() => onSelect(date.toISOString())}
      onHov
      border
      fill
  
    
      hoverIndicator={{
        background: {
          color: "background-contrast",
        },
        elevation: "medium",
      }}
    >
      {/* <Stack anchor="top-right" fill> */}

      {/* {hasContent ? ( */}

      <DropButton
        open={isSelected}
        icon={
          <Box pad="small" align="center" justify="center" fill>
            <Text size="large">{day}</Text>
            {data && data.emoji && <Text size="large">{`${data.emoji}`}</Text>}
          </Box>
        }
        dropContent={
          <Box pad="large">
            <CellForm data={data} date={date} />
          </Box>
        }
        dropAlign={{
          top: "top",
        }}
      />
      {/* ) : null} */}
      {/* </Stack> */}
    </Box>
  );
};
