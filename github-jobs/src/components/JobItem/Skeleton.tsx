import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

interface SkeletonJobitem {
  className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  item: {
    borderRadius: spacing(1),
  }
}));

const SkeletonJobitem: React.FC<SkeletonJobitem> = ({ className = '' }) => {
  const classes = useStyles();

  return (
    <>
      <Skeleton
        height={136}
        variant="rect"
        component="div"
        className={clsx(className, classes.item)}
      />
    </>
  );
};

export default SkeletonJobitem;
