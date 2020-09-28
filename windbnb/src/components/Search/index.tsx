import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import Typo from '@material-ui/core/Typography';
import { RootState } from 'store';

import SearchPopup from '../SearchPopup';
import { openSearch } from '../../store/layout/actions';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: spacing(2),
    cursor: 'pointer',
    [breakpoints.down('md')]: {
      marginTop: spacing(2),
      display: 'inline-flex',
    },
  },
  iconSearch: {
    color: '#EB5757',
    padding: spacing(2),
    display: 'inline-flex',
    alignItems: 'center',
  },
  location: {
    padding: spacing(2.2, 2),
    borderRight: `1px solid ${palette.grey[300]}`,
  },
  guests: {
    padding: spacing(2.2, 2),
    borderRight: `1px solid ${palette.grey[300]}`,
  },
  text: {
    whiteSpace: 'nowrap',
  },
}));

const Search: React.FC = () => {
  const classes = useStyles();
  const location = useSelector((state: RootState) => state.stays.location);
  const guests = useSelector((state: RootState) => state.stays.guests);
  const totalGuests = guests.adults + guests.children;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openSearch());
  };

  return (
    <>
      <div className={classes.root} onClick={handleClick}>
        <div className={classes.location}>
          <Typo className={classes.text}>{location || 'Add location'}</Typo>
        </div>
        <div className={classes.guests}>
          <Typo className={classes.text}>{totalGuests || 'Add guest'}</Typo>
        </div>
        <div className={classes.iconSearch}>
          <SearchIcon />
        </div>
      </div>
      <SearchPopup />
    </>
  );
};

export default Search;
