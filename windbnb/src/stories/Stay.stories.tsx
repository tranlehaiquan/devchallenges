import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Stay, StayProps } from '../components/Stay';

export default {
  title: 'Example/Stay',
  component: Stay,
  decorators: [(Story) => <div style={{ maxWidth: '300px' }}><Story/></div>]
} as Meta;

const Template: Story<StayProps>  = args => <Stay {...args} />;

export const ItemStay = Template.bind({});
ItemStay.args = {
  id: '1',
  city: 'Helsinki',
  country: 'Finland',
  superHost: false,
  title: 'Stylist apartment in center of the city',
  rating: 4.4,
  maxGuests: 3,
  type: 'Entire apartment',
  beds: 2,
  photo:
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
};