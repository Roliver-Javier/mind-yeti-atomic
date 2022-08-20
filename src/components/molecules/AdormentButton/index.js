import React from "react";
import { Button, Text } from '../../atoms';

const AdormentButton = ({ addorment, text, handleClick }) => {
  return (
    <Button variant="blank" onClick={handleClick} >
        <Text>[{addorment}]</Text>
        <Text>{text}</Text>
    </Button>
  )
};

export default AdormentButton;
