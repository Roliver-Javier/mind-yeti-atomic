import React from "react";
import { Flex, Text, Button, GridBox } from '../../atoms'
import { Card } from '../../molecules'

const YetiBanner = ({
    title,
    subtitle,
    cta
}) => {
  return (
<Card bg="blue" borderRadius={0} minHeight="18rem">
            <Card.Header>
                <Flex flexDirection="row" p="10px" justifyContent="space-between">
                    <Flex flexDirection="row">
                        <Button variant="blank">
                            <Text color="white"> {'<'} </Text> {/*Svg atom */}
                            <Text color="white">Back to Dashboard</Text>
                        </Button>
                    </Flex>

                    <Flex flexDirection="row">
                        <Button variant="blank">
                            <Text color="white">English  </Text>
                        </Button>
                        <Flex pl="5px" pr="15px">
                            <Text color="white">|</Text>
                        </Flex>
                        <Button variant="blank">
                        <Text color="white">Spanish</Text>
                        </Button>
                    </Flex>
                    
                    
                </Flex>
            </Card.Header>

            <Card.Body>
                <Flex flexDirection="row" pl="10px">
                    <Text size="normal"  color="white" fontSize="20px" fontWeigth="700" lineHeight="35px">{title}</Text>
                </Flex>
                <Flex pl="10px">
                    <Text  size="normal" color="white" fontSize="14px" fontWeigth="200" lineHeight="25px">{subtitle}</Text>
                </Flex>
            </Card.Body>

            <Card.Footer>
                <Flex pl="10px" mt="25px">
                    <GridBox gridTemplateColumns="90px 90px" gridGap="10px">
                        { cta.map(
                            ({ text, handleClick, ...btnProps}, i)=>
                            <Button key={i} {...btnProps} onClick={handleClick} >
                                <Text color="white">{text}</Text>
                            </Button>
                            )
                        }
                    </GridBox>
                </Flex>
                
            </Card.Footer>
       </Card>
  )
};

export default YetiBanner;
