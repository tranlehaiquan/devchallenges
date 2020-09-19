import React from 'react';
import clsx from 'clsx';
import Icon from '../Icon';

import styles from './index.module.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button disable
   */
  disabled: boolean;
  /**
   * Button type
   */
  color: 'default' | 'primary' | 'secondary' | 'danger';
  /**
   * Button variant
   */
  variant?: 'outline' | 'text';
  /**
   * Disable button shadow
   */
  disableShadow: boolean;
  /**
   * OnClick event
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Button size
   */
  size: 'sm' | 'md' | 'lg';
  startIcon?: string;
  endIcon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  color = 'default',
  children,
  disableShadow = false,
  variant,
  size = 'md',
  startIcon,
  endIcon,
  ...restProps
}) => {
  const btnClassnames = clsx(
    styles['button'],
    color && styles[`button--${color}`],
    variant && styles[`button--${variant}`],
    disableShadow && styles['button--disableShadow'],
    disabled && styles['button--disabled'],
    size && styles[`button--s-${size}`]
  );

  return (
    <button disabled={disabled} className={btnClassnames} {...restProps}>
      {startIcon && (
        <Icon name={startIcon} className={styles['button-icon-start']} />
      )}
      {children}
      {endIcon && <Icon name={endIcon} className={styles['button-icon-end']} />}
    </button>
  );
};

export default Button;