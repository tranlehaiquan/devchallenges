import React from 'react';
import cls from 'clsx';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <span className={cls(className, 'material-icons')}>{name}</span>;
};

export default Icon;
