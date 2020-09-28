import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { Guests } from '../../types';
import GuestCounter from '../GuestCounter';

const useStyles = makeStyles(({ spacing }) => ({
  counter: {
    marginBottom: spacing(4),
  },
}));

interface GuestControlProps {
  guests: Guests;
  onChange: (guests: Guests) => void;
}

const GuestControl: React.FC<GuestControlProps> = ({ guests, onChange }) => {
  const handleAdultsChange = (number: number) => {
    onChange({
      ...guests,
      adults: number,
    });
  };

  const handleChildren = (number: number) => {
    onChange({
      ...guests,
      children: number,
    });
  };
  const classes = useStyles();

  return (
    <>
      <GuestCounter
        label="Adults"
        helperMessage="Ages 13 or above"
        number={guests.adults}
        onChange={handleAdultsChange}
        min={0}
        className={classes.counter}
      />
      <GuestCounter
        label="Children"
        helperMessage="Ages 2-12"
        number={guests.children}
        onChange={handleChildren}
        min={0}
      />
    </>
  );
};

export default GuestControl;
