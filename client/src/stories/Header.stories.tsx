/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header, IHeaderProps } from '../components/Header';

export default {
  title: 'My/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary: ComponentStory<React.FC<IHeaderProps>> = Template.bind({});
Primary.args = {
  title: "MoneyTracker",
};

export const Detail: ComponentStory<React.FC<IHeaderProps>> = Template.bind({});
Detail.args = {
  title: "Expenses",
  back: () => { }
};
