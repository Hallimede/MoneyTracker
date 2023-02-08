/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
    title: 'My/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
    active: true,
    text: 'Active',
    onClick: () => { }
};

export const Inactive = Template.bind({});
Inactive.args = {
    active: false,
    text: 'Inactive',
    onClick: () => { }
};

export const Large = Template.bind({});
Large.args = {
    active: true,
    size: 'large',
    text: 'Large',
    onClick: () => { }
}

export const Small = Template.bind({});
Small.args = {
    active: true,
    size: 'small',
    text: 'Small',
    onClick: () => { }
}