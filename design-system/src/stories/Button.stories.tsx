import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default button',
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: 'primary',
  children: 'Primary button',
};

export const SecondColor = Template.bind({});
SecondColor.args = {
  color: 'secondary',
  children: 'Secondary button'
};

export const DangerColor = Template.bind({});
DangerColor.args = {
  color: 'danger',
  children: 'Danger button'
};

export const ButtonIconStart = Template.bind({});
ButtonIconStart.args = {
  startIcon: 'account_circle',
  children: 'Button icon'
};

export const ButtonIconEnd = Template.bind({});
ButtonIconEnd.args = {
  endIcon: 'bookmark_border',
  children: 'Button icon'
};