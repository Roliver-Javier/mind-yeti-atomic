import React from "react";
import { Flex, Button, Text } from '../../atoms'
import { Card } from '../../molecules'

const PlaylistLessonItem = ({
    title, 
    subtitle,
    hasVideo,
    icon,
    cta
}) => {
    const [ videoBtn, pdfButton ] = cta;
    return (
    <Card bg="skyBlue" borderRadius={10}>
        <Card.Header>
                <Flex p="10px" width="100%" flexDirection="row">
                    <Text fontSize="18px" fontWeight="600" lineHeight="0px">{title}</Text>
                    { hasVideo && (
                        <Flex ml="10px">
                            <Text ml="10px" lineHeight="0px">[{icon}]</Text>
                        </Flex>
                        )
                    }
                </Flex>
        </Card.Header>
        <Card.Body>
                <Flex pl="10px" pr="10px" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Text>
                        {subtitle}
                    </Text>
                
                    <Button 
                        variant={videoBtn.variant} 
                        onClick={videoBtn.handleClick}
                    >{videoBtn.text}</Button>
                </Flex>
            </Card.Body>

         
                <Card.Footer>
                    <Flex p="10px">
                {hasVideo && (
                    <Flex flexDirection="row">
                        <Text lineHeight="0px">[{pdfButton.addorment}]</Text>
                        <Text fontSize="12px" lineHeight="0px">{pdfButton.text}</Text>
                    </Flex>
                )}
                </Flex>
                </Card.Footer>

    </Card>
    )
}
export default PlaylistLessonItem;
