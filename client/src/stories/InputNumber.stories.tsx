/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IInputNumberProps, MyInputNumber } from '../components/MyInputNumber';

export default {
    title: 'My/InputNumber',
    component: MyInputNumber,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MyInputNumber>;

const Template: ComponentStory<typeof MyInputNumber> = (args) => <MyInputNumber {...args} />;

export const Primary: ComponentStory<React.FC<IInputNumberProps>> = Template.bind({});
Primary.args = {
    amount: 0,
    onValueChange: () => { },
};
