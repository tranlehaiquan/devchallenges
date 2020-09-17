import React, { HTMLAttributes } from 'react';
import cls from 'clsx';
import Icon from '../Icon';

import styles from './index.module.scss';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  helperMessage?: string;
  error: boolean;
  startIcon?: string;
  endIcon?: string;
  size: 'sm' | 'md' | 'lg';
  fullWidth: boolean;
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  helperMessage,
  error = false,
  startIcon = '',
  endIcon = '',
  size = 'md',
  fullWidth = false,
  label = '',
}) => {
  const rootClass = cls(
    styles.textField,
    fullWidth && styles.textFieldFullWidth
  );

  return (
    <div className={rootClass}>
      {label && <label>{label}</label>}
      <div>
        {startIcon && <Icon name={startIcon} />}
        <input />
        {endIcon && <Icon name={endIcon} />}
      </div>
      {helperMessage && <span>{helperMessage}</span>}
    </div>
  );
};

export default TextField;
