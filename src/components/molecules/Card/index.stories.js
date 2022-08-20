import React from 'react'
import Card from '.'
import Flex from '../../atoms/Flex'

export default {
    title: 'Atomic/Atoms/Card',
    component: Card
}

const Template = args => (
    <Flex width="100%" flexDirection="row" pr="15px" pl="15px">
        <Flex mr="10px"><Card  {...args}>{args.children}</Card></Flex>
    </Flex>
)

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    description: 'Desc'
}

