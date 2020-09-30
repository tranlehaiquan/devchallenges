import React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';

const CustomContainer: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  children,
  ...restProps
}) => {
  return (
    <Container maxWidth={maxWidth} {...restProps}>
      {children}
    </Container>
  );
};

export default CustomContainer;
