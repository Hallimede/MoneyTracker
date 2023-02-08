/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyDropdown } from '../components/MyDropdown';

export default {
    title: 'My/Dropdown',
    component: MyDropdown,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MyDropdown>;

const Template: ComponentStory<typeof MyDropdown> = (args) => <MyDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    catagory: 0,
    onCatagoryChange: () => { }
};
