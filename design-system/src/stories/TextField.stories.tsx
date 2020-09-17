import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from '../components/TextField';

export default {
  title: 'Example/TextField',
  component: TextField,
  argTypes: { onChange: { action: 'Change' } },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};
