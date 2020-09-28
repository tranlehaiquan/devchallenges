import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {},
  btn: {
    height: spacing(3),
    width: spacing(3),
    lineHeight: 1,
    border: '1px solid ' + palette.grey[300],
    borderRadius: spacing(0.5),
  },
  number: {
    width: 30,
    display: 'inline-block',
    textAlign: 'center',
  },
}));

export interface CounterProps {
  number: number;
  onChange: (number: number) => void;
  max?: number;
  min?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  number,
  onChange,
  max,
  min,
  className,
}) => {
  const classes = useStyles();
  const increaseNumber = () => {
    if (max && max < number + 1) return;
    onChange(number + 1);
  };

  const decreaseNumber = () => {
    if (min !== undefined) {
      if (min > number - 1) return;
    }
    onChange(number - 1);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <button className={classes.btn} onClick={decreaseNumber}>
        -
      </button>
      <span className={classes.number}>{number}</span>
      <button className={classes.btn} onClick={increaseNumber}>
        +
      </button>
    </div>
  );
};

export default Counter;
