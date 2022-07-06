import React, { useState } from 'react';

import { Grommet, Box, Calendar, DropButton, Heading, Stack, Text } from 'grommet';
import { Notification } from 'grommet-icons';
import { Cell } from '../Cell/Cell';

export const CustomDayCalendar = () => {
    const calendarContent = [];
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
                                date = { date }
                                day= { day }
                                isSelected = { isSelected }
                                hasContent = { hasContent }
                                onSelect = { onSelect }
                            />
                        );
                    }}
                </Calendar>
            </Box>
     
        </Box>
        </Grommet>
    )

};

