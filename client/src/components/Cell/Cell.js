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
  const [open, setOpen] = useState(false);
  const [emoji, setEmoji] = useState("");
  return (
    <Box
      background={hasContent || emoji ? "accent-1" : "white"}
      color={hasContent || emoji ? "brand" : "text-dark-1"}
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
        onClick={() => setOpen(!open)}
        open={open}
        icon={
          <Box pad="small" align="center" justify="center" fill>
            <Text size="large">{day}</Text>
            {emoji && emoji.length ? (
              <Text size="large">{emoji}</Text>
            ) : (
              data && data.emoji && <Text size="large">{`${data.emoji}`}</Text>
            )}
          </Box>
        }
        dropContent={
          <Box pad="large">
            <CellForm
              emoji={emoji}
              setEmoji={setEmoji}
              setOpen={setOpen}
              data={data}
              date={date}
            />
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
