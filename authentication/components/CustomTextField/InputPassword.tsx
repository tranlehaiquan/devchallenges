import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { TextFieldProps } from '@material-ui/core';
import omit from 'lodash/omit';

import CustomTextField from './CustomTextField';

interface Props {
  initialShowPassword?: boolean;
}

const InputPasswordHideShow: React.FunctionComponent<
  TextFieldProps & Props
> = ({ initialShowPassword = false, ...restProps }) => {
  const [showPassword, setShowPassword] = useState(initialShowPassword);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end">
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
  const type = showPassword ? 'text' : 'password';

  const propsWithoutType = omit(restProps, ['type']);
  
  return (
    <CustomTextField type={type} InputProps={{ endAdornment }} {...propsWithoutType as TextFieldProps} />
  );
};

export default InputPasswordHideShow;
