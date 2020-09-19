import React from 'react';
import { shallow } from '../../enzyme';

import TextField from './index';

describe('TextField test', () => {
  test('Default TextField', () => {
    const componen = shallow(<TextField />);

    expect(componen.hasClass('textField')).toBeTruthy();
    expect(componen.hasClass('textField-md')).toBeTruthy();
  });

  test('TextField with label', () => {
    const label = 'Your password';
    const componen = shallow(<TextField label={label} />);
    const labelComponent = componen.find('.textFieldLabel');

    expect(labelComponent.text()).toBe(label);
  });

  test('TextField with helper message', () => {
    const helperMsg = 'The password min 8 characters';
    const componen = shallow(<TextField helperMessage={helperMsg} />);
    const helperMessageComponent = componen.find('.textFieldHelper');

    expect(helperMessageComponent.text()).toBe(helperMsg);
  });

  test('TextField with error', () => {
    const label = 'Your password';
    const helperMsg = 'The password min 8 characters';
    const componen = shallow(
      <TextField helperMessage={helperMsg} label={label} error />
    );

    expect(componen.hasClass('textFieldError')).toBeTruthy();
  });

  test('TextField full width', () => {
    const componen = shallow(<TextField fullWidth />);

    expect(componen.hasClass('textFieldFullWidth')).toBeTruthy();
  });

  test('TextField with icon', () => {
    const startIconText = 'start_icon';
    const endIconText = 'end_icon';
    const componen = shallow(
      <TextField startIcon={startIconText} endIcon={endIconText} />
    );
    const icons = componen.find('Icon');

    expect(icons.get(0).props.name).toBe(startIconText);
    expect(icons.get(1).props.name).toBe(endIconText);
  });

  test('TextField with icon', () => {
    const startIconText = 'start_icon';
    const endIconText = 'end_icon';
    const componen = shallow(
      <TextField startIcon={startIconText} endIcon={endIconText} />
    );
    const icons = componen.find('Icon');

    expect(icons.get(0).props.name).toBe(startIconText);
    expect(icons.get(1).props.name).toBe(endIconText);
  });

  test('TextField disabled', () => {
    const componen = shallow(
      <TextField disabled />
    );

    expect(componen.hasClass('textFieldDisabled')).toBeTruthy();
  });
});
