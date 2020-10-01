import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
}));

const HireLocation: React.FC<{ location: string; className?: string }> = ({
  location,
  className,
}) => {
  const classes = useStyles();
  return (
    <Typo variant="subtitle2" className={clsx(classes.root, className)}>
      <PublicIcon /> {location}
    </Typo>
  );
};

export default HireLocation;
