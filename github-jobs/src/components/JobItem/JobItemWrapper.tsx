import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    display: 'flex',
    borderRadius: spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    backgroundColor: palette.common.white,
    padding: spacing(1.75),
    [breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  logo: {
    width: 120,
    display: 'flex',
    alignItems: 'center',
    marginRight: spacing(1.75),
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
    [breakpoints.down('xs')]: {
      width: '100%',
      justifyContent: 'flex-start',
      marginBottom: spacing(1),
      '& img': {
        display: 'block',
        width: '100%',
      },
    },
  },
  jobDes: {
    flex: 1,
  },
}));

interface JobItemProps {
  className?: string;
  description: React.ReactNode,
  logo: React.ReactNode,
}

const JobItemWrapper: React.FC<JobItemProps> = ({
  className,
  logo,
  description,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <div className={classes.logo}>
        {logo}
      </div>
      <div className={classes.jobDes}>
        {description}
      </div>
    </div>
  );
};

export default JobItemWrapper;
