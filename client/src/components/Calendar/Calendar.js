import React, { useState } from 'react';

import { Grommet, Box, Calendar, DropButton, Heading, Stack, Text } from 'grommet';
import { Notification } from 'grommet-icons';
import { Cell } from '../Cell/Cell';
import { gql, useQuery } from '@apollo/client'

const GET_DAYS_BY_USERID = gql`
    query GetDaysByUserId($userId: String!) {
        getDaysByUserId(userId: $userId) {
            _id
            emoji
             date
            userId
        }
    }   
`

export const CustomDayCalendar = () => {
    const calendarContent = useQuery(GET_DAYS_BY_USERID, {
        variables: {
            userId: "62c741a188c2a753fe430b86"
        }
    })
    const [selectedDay, setSelectedDay] = useState();
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
                            const hasContent = calendarContent.includes(day);
                            return (
                                <Cell
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
    )

};

