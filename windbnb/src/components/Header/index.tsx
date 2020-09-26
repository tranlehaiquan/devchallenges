import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

import Logo from '../Logo';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  logo: {
    maxWidth: 130,
    display: 'block',
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container>
        <h1>
          <Link to="/" className={classes.logo}>
            <Logo />
          </Link>
        </h1>
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
