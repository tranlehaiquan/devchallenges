import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface Props {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center'
  }
}));

const SocialIndentity: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typo className={classes.title}>
        or continue with these social profile
      </Typo>
    </>
  );
};

export default SocialIndentity;
