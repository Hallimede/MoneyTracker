/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, IButtonProps } from '../components/Button';

export default {
    title: 'My/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active: ComponentStory<React.FC<IButtonProps>> = Template.bind({});
Active.args = {
    active: true,
    text: 'Active',
    onClick: () => { }
};

export const Inactive: ComponentStory<React.FC<IButtonProps>> = Template.bind({});
Inactive.args = {
    active: false,
    text: 'Inactive',
    onClick: () => { }
};

export const Large: ComponentStory<React.FC<IButtonProps>> = Template.bind({});
Large.args = {
    active: true,
    size: 'large',
    text: 'Large',
    onClick: () => { }
}

export const Small: ComponentStory<React.FC<IButtonProps>> = Template.bind({});
Small.args = {
    active: true,
    size: 'small',
    text: 'Small',
    onClick: () => { }
}