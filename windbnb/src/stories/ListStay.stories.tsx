import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ListStay, ListStayProps } from '../components/ListStay';

export default {
  title: 'Example/ListStay',
  component: ListStay,
  decorators: [(Story) => <div style={{ maxWidth: '1000px' }}><Story/></div>]
} as Meta;

const Template: Story<ListStayProps>  = args => <ListStay {...args} />;

const mockStay = {
  city: 'Helsinki',
  country: 'Finland',
  superHost: false,
  title: 'Stylist apartment in center of the city',
  rating: 4.4,
  maxGuests: 3,
  type: 'Entire apartment apartment apartment apartment',
  beds: 2,
  photo:
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
};

const mockList = (new Array(6)).fill(undefined).map((item, index) => ({
  id: index,
  ...mockStay,
  superHost: index === 3 && true,
}))

export const ItemListStay = Template.bind({});
ItemListStay.args = { stays: mockList };