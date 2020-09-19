import React, { HTMLAttributes, useState } from 'react';
import cls from 'clsx';
import Icon from '../Icon';

import classes from './index.module.scss';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Helper message, will be error when error be true
   */
  helperMessage?: string;
  /**
   * Is error or not
   */
  error: boolean;
  /**
   * Start icon (material icon)
   */
  startIcon?: string;
  /**
   * End icon (material icon)
   */
  endIcon?: string;
  /**
   * Textfield size
   */
  size: 'sm' | 'md';
  /**
   * Enable full width
   */
  fullWidth: boolean;
  /**
   * Label for input
   */
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Value of input
   */
  value?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Default value
   */
  defaultValue?: string;
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
  defaultValue = '',
  ...restProps
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
    defaultValue,
    ...restProps,
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
      <label className={classes.inputWrapper}>
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
