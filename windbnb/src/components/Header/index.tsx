import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typo from '@material-ui/core/Typography';

import Search from '../Search';
import Logo from '../Logo';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  logo: {
    flex: '0 0 130px',
    maxWidth: 130,
    display: 'block',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  searchWrapper: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  }
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typo component="h1" variant="inherit" className={classes.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </Typo>

          <div className={classes.searchWrapper}>
            <Search />
          </div>
        </div>
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
