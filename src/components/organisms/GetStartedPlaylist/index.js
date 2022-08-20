import React from "react";
import { Flex, GridBox, Text } from '../../atoms'
import { Card } from '../../molecules'
import PlaylistLessonItem from '../PlaylistLessonItem'

const YetiGetStartedPlaylist = (
    {
        title,
        subtitle,
        lessons
    }
) => {
  return (
    <Card borderRadius={5} bg="white">
        <Card.Header>
            <Flex flexDirection="row">
                <Text fontSize="18px" fontWeight="600">{title}</Text>
            </Flex>
            <Text>{subtitle}</Text>
         </Card.Header>
        <Card.Body>
            <GridBox gridTemplateColumns="100%" gridGap="20px">
                { lessons.map( (lesson, i) => (<PlaylistLessonItem key={i} {...lesson}/>)) }
            </GridBox>
        </Card.Body>
    </Card>
  )
};

export default YetiGetStartedPlaylist;
