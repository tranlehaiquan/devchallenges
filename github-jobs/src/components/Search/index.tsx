import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { InputBase, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { setDescription } from '../../store/filters/actions';
import Container from '../Container';
import luggageIcon from '../../images/luggage.svg';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    position: 'relative',
    [breakpoints.down('md')]: {
      padding: 0,
    },
  },
  img: {},
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: 800,
    width: '100%',
    top: '50%',
    background: '#fff',
    padding: spacing(0.5),
    borderRadius: spacing(0.5),
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
    },
  },
  icon: {
    maxWidth: 25,
    marginRight: spacing(1),
    marginLeft: spacing(0.5),
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  bgImg: {
    maxWidth: '100%',
    display: 'block',
    borderRadius: spacing(1),
    [breakpoints.down('sm')]: {
      borderRadius: spacing(0),
    },
  },
}));

const Search = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "backgroundImg.png" }) {
        childImageSharp {
          fixed(cropFocus: CENTER, height: 150, fit: COVER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleClickSearch = () => {
    dispatch(setDescription(search));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  };

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        className={classes.bgImg}
      />
      <div className={classes.search}>
        <InputBase
          placeholder="Title, companies, expertise or benefits"
          fullWidth
          value={search}
          startAdornment={<img src={luggageIcon} className={classes.icon} />}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button variant="contained" color="primary" onClick={handleClickSearch}>
          Search
        </Button>
      </div>
    </Container>
  );
};

export default Search;
