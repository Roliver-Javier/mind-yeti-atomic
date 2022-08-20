import React from 'react'
import Text from '.'
import Flex from '../Flex'

export default {
    title: 'Atomic/Atoms/Text',
    component: Text
}

const Template = args => (
    <Flex width="100%" flexDirection="row" pr="15px" pl="15px">
        <Flex mr="10px"><Text  {...args} size="h1">{args.children}</Text></Flex>
        <Flex mr="10px"><Text  {...args} size="h2">{args.children}</Text></Flex>
        <Flex mr="10px"><Text  {...args} size="h3">{args.children}</Text></Flex>
        <Flex mr="10px"><Text  {...args} size="h4">{args.children}</Text></Flex>
        <Flex mr="10px"><Text  {...args} size="sm">{args.children}</Text></Flex>
        <Flex mr="10px"><Text  {...args} size="normal">{args.children}</Text></Flex>
    </Flex>
)

export const Default = Template.bind({});
Default.args = {
    children: 'Text',
}

