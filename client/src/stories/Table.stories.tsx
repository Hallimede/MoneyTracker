import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../components/Table';

export default {
    title: 'My/Table',
    component: Table,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

const data = [{
    catagory: "Bills",
    amount: 200
},
{
    catagory: "Grocery",
    amount: 300
},
{
    catagory: "Health",
    amount: 500
}]

Primary.args = {
    data: data,
    title: "Example Table"

};


export const Secondary = Template.bind({});

const data2 = [{
    date: "7/1/23",
    catagory: "Bills",
    amount: 200
},
{
    date: "6/4/23",
    catagory: "Grocery",
    amount: 300
},
{
    date: "5/1/23",
    catagory: "Health",
    amount: 500
}]

Secondary.args = {
    data: data2,
    title: "Example Table"

};