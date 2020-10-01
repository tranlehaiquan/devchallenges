import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  jobType: {
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: spacing(0.5),
    padding: spacing(0.5, 1),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1),
    },
  },
}));

const JobType: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Typo variant="subtitle2" className={classes.jobType}>
      {children}
    </Typo>
  );
};

export default JobType;
