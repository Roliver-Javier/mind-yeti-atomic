import React from "react";
import styled from "styled-components";
import { Flex } from '../../atoms'

const Container = styled(Flex)`
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
`
const Card = ({...rest}) => <Container  {...rest} />
Card.Header =  ({children, ...rest}) => <Flex {...rest}>{children}</Flex> 
Card.Body = ({children, ...rest}) => <Flex {...rest}>{children}</Flex> 
Card.Footer = ({children, ...rest}) => <Flex {...rest}>{children}</Flex> 



Card.defaultProps = {
    position: 'relative',
    p: 0,
    m: 0,
    minWidth: 0,
    borderRadius: 3,
}
    
export default Card;
