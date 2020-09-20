import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from '../components/TextField';

export default {
  title: 'Example/TextField',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your account',
  helperMessage: 'Helper message',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  label: 'Your account',
  helperMessage: 'Helper message',
  defaultValue: 'Hello the world',
};


export const SmallSize = Template.bind({});
SmallSize.args = {
  label: 'Your account (small one)',
  helperMessage: 'Helper message',
  size: 'sm',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'Your account',
  helperMessage: 'Error message',
  error: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full width input',
  helperMessage: 'Helper message',
  fullWidth: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: 'Full width input',
  helperMessage: 'Helper message',
  fullWidth: true,
  startIcon: 'bookmark_border',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Full width input',
  helperMessage: 'Helper message',
  disabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Full width input',
  helperMessage: 'Helper message',
  multiline: true,
  rows: 3,
};