import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Container from '../Container';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    textAlign: 'center',
    marginTop: spacing(4),
    marginBottom: spacing(2),
  },
  line: {
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: spacing(1),
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <footer className={classes.root}>
        <hr className={classes.line} />
        Quan Tran © {new Date().getFullYear()} DevChallenges.io, <br /> Built
        with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  );
};

export default Footer;
