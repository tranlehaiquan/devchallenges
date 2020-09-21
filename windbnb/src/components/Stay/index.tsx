import React from 'react';
import cls from 'clsx';
import makeStyle from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';

import { Stay as StayModel } from '../../types';

export interface StayProps extends StayModel {
  className?: string;
}

const useStyles = makeStyle(({ spacing }) => ({
  root: {},
  img: {
    borderRadius: spacing(2),
    marginBottom: spacing(2),
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing(0.5),
  },
  superHost: {
    color: '#4F4F4F',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: spacing(2),
    padding: spacing(0.5, 1),
    lineHeight: 1,
    fontSize: 12,
    marginRight: spacing(0.5),
    whiteSpace: 'nowrap',
  },
  infoName: {
    display: 'flex',
    flex: `0 0 calc(100% - 50px)`,
    width: 'calc(100% - 50px)',
  },
  type: {
    color: '#828282',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 12,
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  rating: {},
}));

export const Stay: React.FC<StayProps> = props => {
  const { title, photo, rating, superHost, type, className } = props;
  const classes = useStyles();

  return (
    <div className={cls(className, classes.root)}>
      <img src={photo} alt={title} className={cls('img-fluid', classes.img)} />
      <div className={classes.info}>
        <div className={classes.infoName}>
          {superHost && (
            <Typo component="span" className={classes.superHost}>
              SUPER HOST
            </Typo>
          )}
          <Typo className={classes.type}>{type}</Typo>
        </div>
        <Typo className={classes.rating}>{rating}</Typo>
      </div>
      <Typo className={classes.title}>{title}</Typo>
    </div>
  );
};

export default Stay;
