import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
  input: {
    padding: spacing(1.5, 2),
  },
}));

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField {...props} InputProps={{ classes: { input: classes.input } }} />
  );
};

export default CustomTextField;
