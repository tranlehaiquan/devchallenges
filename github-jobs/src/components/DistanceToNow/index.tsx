import React from 'react';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import cls from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
}));

const DistanceToNow: React.FC<{ time: string, className?: string }> = ({ time, className }) => {
  const classes = useStyles();
  return (
    <Typo variant="subtitle2" className={cls(classes.root, className)}>
      <QueryBuilderIcon /> {time}
    </Typo>
  );
};

export default DistanceToNow;
