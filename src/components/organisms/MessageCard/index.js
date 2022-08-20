import React from "react";
import { Flex, Text } from '../../atoms'
import { Card } from '../../molecules'

const MessageCard = ({title, description}) => (
    <Card bg="white" borderRadius={10}>
    <Card.Body>
        <Flex p="10px" pt="20px" pb="20px">
            <Text fontSize="18px" fontWeight="600">{title}</Text>
            <Text>{description}</Text>
        </Flex>
    </Card.Body>
</Card>
 )

export default MessageCard;
