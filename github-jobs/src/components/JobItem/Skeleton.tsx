import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import JobWrapper from './JobItemWrapper';

interface SkeletonJobitem {
  className?: string;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  item: {
    borderRadius: spacing(1),
  },
  line: {
    marginBottom: spacing(1),
  }
}));

const SkeletonJobitem: React.FC<SkeletonJobitem> = ({ className = '' }) => {
  const classes = useStyles();

  return (
    <JobWrapper
      className={className}
      logo={
        <Skeleton
          height={100}
          width="100%"
          variant="rect"
          component="div"
          className={classes.item}
        />
      }
      description={
        <>
          <Skeleton
            height={10}
            variant="rect"
            component="div"
            className={clsx(classes.item, classes.line)}
          />

          <Skeleton
            height={10}
            variant="rect"
            component="div"
            className={clsx(classes.item, classes.line)}
          />

          <Skeleton
            height={10}
            variant="rect"
            component="div"
            className={clsx(classes.item, classes.line)}
          />
        </>
      }
    />
  );
};

export default SkeletonJobitem;
