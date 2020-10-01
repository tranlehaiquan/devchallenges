import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import makeStyle from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyle(({ palette }) => ({
  link: {
    color: palette.primary.main,
  },
}));

export default function CustomLink({ className = '', ...restProps }) {
  const classes = useStyles();

  return <Link {...restProps} className={clsx(classes.link, className)} />;
}
