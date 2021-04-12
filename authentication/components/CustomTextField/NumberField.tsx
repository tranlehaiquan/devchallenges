import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import CustomTextField from './CustomTextField';
import { TextFieldProps } from '@material-ui/core';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

const NumberField: React.FunctionComponent<
  TextFieldProps & NumberFormatProps
> = ({ InputProps, ...restProps }) => {
  return (
    <CustomTextField
      {...restProps}
      InputProps={{
        ...InputProps,
        inputComponent: NumberFormatCustom as any,
      }}
    />
  );
};

export default NumberField;
