import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Stay from '../Stay';
import { Stay as StayInterface } from '../../types';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing(2),
  }
}));

export interface ListStayProps {
  /**
   * List stay
   */
  stays: StayInterface[];
}

export const ListStay: React.FC<ListStayProps> = ({ stays = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Typo variant="h5">Stays in Finland</Typo>
        <Typo>{stays.length} stays</Typo>
      </div>
      <Grid container spacing={2}>
        {stays.map(stay => (
          <Grid item sm={4} xs={12} key={stay.id}>
            <Stay {...stay} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListStay;
