import React, { HTMLAttributes, useState } from 'react';
import cls from 'clsx';
import Icon from '../Icon';

import classes from './index.module.scss';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  helperMessage?: string;
  error: boolean;
  startIcon?: string;
  endIcon?: string;
  size: 'sm' | 'md';
  fullWidth: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  helperMessage,
  error = false,
  startIcon = '',
  endIcon = '',
  size = 'md',
  fullWidth = false,
  label = '',
  onChange,
  onBlur,
  onFocus,
  value,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const rootClass = cls(
    classes.textField,
    classes[`textField-${size}`],
    fullWidth && classes.textFieldFullWidth,
    error && classes.textFieldError,
    isFocus && classes.textFieldFocus
  );

  const inputProps = {
    ...(value && { value }),
    ...(onChange && { onChange }),
  };

  const handleInputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus && onFocus(event);
  };

  const handleInputOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur && onBlur(event);
  };

  return (
    <div className={rootClass}>
      {label && <label className={classes.textFieldLabel}>{label}</label>}
      <label
        className={classes.inputWrapper}
      >
        {startIcon && <Icon name={startIcon} />}
        <input
          className={classes.textFieldInput}
          {...inputProps}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
        {endIcon && <Icon name={endIcon} />}
      </label>
      {helperMessage && (
        <span className={classes.textFieldHelper}>{helperMessage}</span>
      )}
    </div>
  );
};

export default TextField;
