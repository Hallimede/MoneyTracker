/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../components/Table';
import type { SummaryData } from '../views/Home';

export default {
    title: 'My/Table',
    component: Table,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

const data: SummaryData[] = [{
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

const data2: IRecordItem[] = [{
    date: "7/1/23",
    catagory: 1,
    amount: 200
},
{
    date: "6/4/23",
    catagory: 2,
    amount: 300
},
{
    date: "5/1/23",
    catagory: 3,
    amount: 500
}]

Secondary.args = {
    data: data2,
    title: "Example Table"
};