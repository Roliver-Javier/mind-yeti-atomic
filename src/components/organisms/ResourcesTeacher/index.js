import React from "react";
import { Flex, GridBox, Text } from '../../atoms'
import { Card, AdormentButton } from '../../molecules'

const YetiResourcesTeacher = ({
    title,
    subtitle,
    cta
}) => {
  return (
    <Card bg="white" borderRadius={5}>
        <Card.Header>
            <Flex flexDirection="row">
                <Text fontSize="18px" fontWeight="600">{title}</Text>
            </Flex>
            <Text>
                {subtitle}
            </Text>
        </Card.Header>

        <Card.Body>
            <GridBox gridTemplateColumns="18rem 18rem" gridGap="20px">
                { cta.map((doc, i)=> <AdormentButton key={i} {...doc} />) }
            </GridBox>
        </Card.Body>        
    </Card>
  )
};

export default YetiResourcesTeacher;
