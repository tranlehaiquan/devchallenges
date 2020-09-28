import React from 'react';
import makeStyle from '@material-ui/core/styles/makeStyles';
import InputBase from '@material-ui/core/InputBase';
import { InputProps } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyle(({ spacing }) => ({
  root: {
    position: 'relative',
  },
  label: {
    display: 'block',
    color: '#4A4854',
    fontSize: 11,
    lineHeight: 1,
    paddingTop: spacing(0.8),
  },
  requiredNotice: {
    color: red.A400,
  },
  inputBase: {
    paddingBottom: 0,
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 18,
  }
}));

interface TextFieldProps extends InputProps {
  className?: string;
  label?: string;
  onReset?: () => void;
  showReset?: boolean;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  id,
  inputProps,
  className,
  onReset,
  showReset,
  ...restProps
}) => {
  const { required } = restProps;
  const classes = useStyles();
  const inputPropsCustom = {
    ...inputProps,
  };

  return (
    <div className={clsx(className, classes.root)}>
      <label htmlFor={id} className={classes.label}>
        {label} {required && <span className={classes.requiredNotice}>*</span>}
      </label>

      <InputBase
        {...restProps}
        inputProps={{ ...inputPropsCustom, className: classes.inputBase }}
      />
      {showReset && (
        <IconButton className={classes.closeBtn} onClick={onReset} size="small">
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};

export default TextField;
