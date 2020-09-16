import React from 'react';
import clsx from 'clsx';
import './index.scss';

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
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  color = 'default',
  children,
  disableShadow = false,
  variant,
  size = 'md',
  ...restProps
}) => {

  const btnClassnames = clsx(
    'sp-button',
    color && `sp-button--${color}`,
    variant && `sp-button--${variant}`,
    disableShadow && 'sp-button--disableShadow',
    disabled && 'sp-button--disabled',
    size && `sp-button--s-${size}`
  );

  return (
    <button disabled={disabled} className={btnClassnames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
