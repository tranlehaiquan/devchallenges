import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';

import InputPassword from './InputPassword';
import CustomTextField from './CustomTextField';

const FormikTextField: React.FunctionComponent<
  TextFieldProps & { caption?: string }
> = ({ name, type, ...restProps }) => {
  const [field, meta] = useField(name);

  if (type === 'password') {
    return (
      <InputPassword
        type={type}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        helperText={meta.touched && meta.error}
        error={!!(meta.touched && meta.error)}
        name={name}
        {...restProps}
      />
    );
  }

  return (
    <CustomTextField
      type={type}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      helperText={meta.touched && meta.error}
      error={!!(meta.touched && meta.error)}
      name={name}
      {...restProps}
    />
  );
};

export default FormikTextField;
