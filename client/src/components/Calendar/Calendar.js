import React, { useState } from "react";

import {
  Grommet,
  Box,
  Calendar,
  DropButton,
  Heading,
  Stack,
  Text,
} from "grommet";
import { Notification } from "grommet-icons";
import { Cell } from "../Cell/Cell";
import { gql, useQuery } from "@apollo/client";

const GET_DAYS_BY_USERID = gql`
  query GetDaysByUserId($userId: String!) {
    getDaysByUserId(userId: $userId) {
      _id
      emoji
      date
      userId
    }
  }
`;

export const CustomDayCalendar = () => {
  const [selectedDay, setSelectedDay] = useState();
  //   const calendarContent = [];
  const { loading, error, data } = useQuery(GET_DAYS_BY_USERID, {
    variables: {
      userId: "62c87d6c43fab50e0426ffc4", // hard coded for testing purposes
    },
  });
  if (loading) return <p>Loading...</p>;
  const { getDaysByUserId } = data; // getDaysByUserId is an array of objects
  //   console.log(getDaysByUserId);

  //   console.log(calendarContent);
  //   console.log({ loading, error, data });

  const onSelect = (value) => {
    setSelectedDay(value);
  };

  return (
    <Grommet>
      <Box>
        <Box align="center" pad="large">
          <Heading level={4}>Test Calendar</Heading>
          <Calendar date={selectedDay} showAdjacentDays={"trim"} fill>
            {({ date, day, isSelected }) => {
                // hasContent is a boolean that determines if there is a day with a date property that matches the date of the day in the iteration.
              const hasContent = getDaysByUserId
                .map((day) => new Date(parseInt(day.date)).toDateString())
                .includes(date.toDateString());
              // we did this because we arent inside of a map where we would have an index... we do not have index so we will just use the .find method
              // dayData is the data that represents the data we will give to the cell
              const dayData = getDaysByUserId.find(
                (dayFromQuery) =>
                  new Date(parseInt(dayFromQuery.date)).toDateString() ===
                  date.toDateString()
              );

              return (
                <Cell
                  data={dayData}
                  date={date}
                  day={day}
                  isSelected={isSelected}
                  hasContent={hasContent}
                  onSelect={onSelect}
                />
              );
            }}
          </Calendar>
        </Box>
      </Box>
    </Grommet>
  );
};
