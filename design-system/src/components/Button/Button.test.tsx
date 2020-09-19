import React from 'react';
import { shallow } from '../../enzyme';

import Button from './index';

describe('Button test', () => {
  test('Default button with text', () => {
    const component = shallow(<Button>Default button</Button>);
    expect(component.text()).toEqual('Default button');
    expect(component.hasClass('button--default')).toBeTruthy();
    expect(component.hasClass('buttonSizemd')).toBeTruthy();
  });

  test('Disabled button', () => {
    const component = shallow(<Button disabled>Disabled button</Button>);

    expect(component.hasClass('buttonDisabled')).toBeTruthy();
  });

  test('Disabled shadow', () => {
    const component = shallow(
      <Button disableShadow>Disabled shadow button</Button>
    );

    expect(component.hasClass('buttonDisableShadow')).toBeTruthy();
  });

  test('Button with props className', () => {
    const component = shallow(
      <Button className="testing-class">Default button</Button>
    );

    expect(component.hasClass('testing-class')).toBeTruthy();
  });

  test('Button sizes', () => {
    const component = shallow(<Button>Sizes</Button>);
    expect(component.hasClass('buttonSizemd')).toBeTruthy();
    component.setProps({ size: 'sm' });
    expect(component.hasClass('buttonSizesm')).toBeTruthy();
    component.setProps({ size: 'lg' });
    expect(component.hasClass('buttonSizelg')).toBeTruthy();
  });

  test('Button variant', () => {
    const component = shallow(<Button>Sizes</Button>);
    expect(component.hasClass('button-outline')).toBeFalsy();
    component.setProps({ variant: 'outline' });
    expect(component.hasClass('button-outline')).toBeTruthy();
    component.setProps({ variant: 'text' });
    expect(component.hasClass('button-text')).toBeTruthy();
  });
});
