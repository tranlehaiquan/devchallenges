import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Counter, { CounterProps } from '../Counter';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    marginBottom: spacing(1),
  },
  label: {
    fontWeight: 'bold',
    lineHeight: 1,
  },
  helperMessage: {
    color: palette.grey[500],
  },
  counter: {
    marginTop: spacing(1),
  }
}));

interface GuestCounter extends CounterProps {
  label: string;
  helperMessage: string;
  onChange: (number: number) => void;
  number: number;
  className?: string;
}

const GuestCounter: React.FC<GuestCounter> = ({
  label,
  helperMessage,
  onChange,
  number,
  className,
  ...restProps
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <Typo variant="subtitle1" className={classes.label}>
        {label}
      </Typo>
      <Typo variant="subtitle2" className={classes.helperMessage}>
        {helperMessage}
      </Typo>
      <Counter className={classes.counter} number={number} onChange={onChange} {...restProps} />
    </div>
  );
};

export default GuestCounter;
