import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';

import Container from '../Container';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
  home: {
    color: palette.common.black,
    textDecoration: 'none',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container>
        <Typo variant="h5" component="h1">
          <Link to="/" className={classes.home}>
            <strong>Github</strong> Jobs
          </Link>
        </Typo>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
