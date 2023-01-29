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
    onCatagoryChange: () => { },
    items: [{ label: 'Item 1', key: 1 }, { label: 'Item 2', key: 2 }, { label: 'Item 3', key: 3 }]
};
