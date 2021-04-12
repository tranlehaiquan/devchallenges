import React from 'react';
import makeStyle from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import { TextFieldProps } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyle(({ spacing }) => ({
  root: {},
  label: {
    fontWeight: 400,
    marginBottom: spacing(1),
    display: 'block',
    color: '#4F4F4F',
    fontSize: 16,
  },
  caption: {
    marginBottom: spacing(1),
    display: 'block',
    fontSize: 11,
    textAlign: 'left',
  },
  requiredNotice: {
    color: red.A400,
  },
}));

const TextFieldCustom: React.FunctionComponent<
  TextFieldProps & { caption?: string }
> = ({ label, id, variant = 'outlined', caption = '', ...restProps }) => {
  const { required } = restProps;
  const classes = useStyles();

  return (
    <>
      <label htmlFor={id} className={classes.label}>
        {label} {required && <span className={classes.requiredNotice}>*</span>}
      </label>
      {caption && (
        <caption id={id} className={classes.caption}>
          {caption}
        </caption>
      )}
      <TextField {...restProps} variant={variant} />
    </>
  );
};

export default TextFieldCustom;
