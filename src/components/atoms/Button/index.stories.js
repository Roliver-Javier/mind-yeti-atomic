import React from 'react'
import Button from '.'
import Flex from '../Flex'

export default {
    title: 'Atomic/Atoms/Button',
    component: Button
}

const Template = args => (
    <Flex width="100%" flexDirection="row" pr="15px" pl="15px">
        <Flex mr="10px"><Button  {...args}>{args.children}</Button></Flex>
        <Flex mr="10px"><Button  {...args}>{args.children}</Button></Flex>
        <Flex mr="10px"><Button  {...args}>{args.children}</Button></Flex>
        <Flex mr="10px"><Button  {...args}>{args.children}</Button></Flex>
    </Flex>
)

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    variant: 'default'
}

export const Rounded = Template.bind({});
Rounded.args = {
    children: 'Button',
    variant: 'rounded',
}

export const Blank = Template.bind({});
Blank.args = {
    children: 'Button',
    variant: 'blank',
}


export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
    children: 'Button',
    variant: 'default',
    appareance: 'outline'
}

export const OutlineActive = Template.bind({});
OutlineActive.args = {
    children: 'Button',
    variant: 'active',
    appareance: 'outline'
}

export const OutlineRounded = Template.bind({});
OutlineRounded.args = {
    children: 'Button',
    variant: 'rounded',
    appareance: 'outline'
}


