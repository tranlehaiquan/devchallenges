import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import { Typography as Typo } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import {
  setGuests as setGuestsAction,
  setLocation as setLocationAction,
} from '../../store/stays/actions';
import useStays from '../../utils/useStays';
import GuestControl from '../GuestControl';
import LocationList from '../LocationList';
import { Location, Guests } from '../../types';
import Button from '../Button';
import TextField from '../../components/TextField';
import { RootState } from '../../store';
import { closeSearch } from '../../store/layout/actions';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'block',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(4),
    }
  },
  searchBox: {
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
  },
  input: {
    padding: theme.spacing(0.5, 2),
  },
  inputFirst: {
    borderRight: '1px solid ' + theme.palette.grey[300],
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: '1px solid ' + theme.palette.grey[300],
    },
  },
  btnSearch: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(2),
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  listLocation: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
  control: {
    marginTop: theme.spacing(2),
  },
  header: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing(2),
    },
  },
  btnWrapper: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      width: '100%',
      textAlign: 'center',
    }
  }
}));

const SearchPopup: React.FC = () => {
  const dispatch = useDispatch();
  const stays = useStays();
  const locationList = stays.reduce<Location[]>((acc, curr) => {
    if (acc.length === 0) acc.push(curr);
    if (
      acc[acc.length - 1].city !== curr.city ||
      acc[acc.length - 1].country !== curr.country
    ) {
      acc.push(curr);
    }
    return acc;
  }, []);
  const classes = useStyles();
  const isSearchOpen = useSelector(
    (state: RootState) => state.layout.isSearchOpen
  );
  const defaultLocation = useSelector(
    (state: RootState) => state.stays.location
  );
  const defautGuests = useSelector((state: RootState) => state.stays.guests);
  const [location, setLocation] = useState<string>(defaultLocation);
  const [guests, setGuests] = useState<Guests>(defautGuests);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleLocationClick = (location: string) => {
    setLocation(location);
  };

  const handleClickBackdrop = () => {
    handleCloseSearch();
    setGuests(defautGuests);
    setLocation(defaultLocation);
  };

  const handleContainerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleBtnSearchClick = () => {
    dispatch(setGuestsAction(guests));
    dispatch(setLocationAction(location));
    handleCloseSearch();
  };

  const setGuestToDefault = () => {
    const guestsDefault = {
      adults: 0,
      children: 0,
    };
    setGuests(guestsDefault);
    dispatch(setGuestsAction(guestsDefault));
  };

  const setLocationDefult = () => {
    setLocation('');
    dispatch(setLocationAction(''));
  };

  const handleCloseSearch = () => {
    dispatch(closeSearch());
  };

  return (
    <Backdrop
      open={isSearchOpen}
      onClick={handleClickBackdrop}
      className={classes.backdrop}
    >
      <div className={classes.root} onClick={handleContainerClick}>
        <Container>
          <div className={classes.header}>
            <Typo>Edit your search</Typo>

            <IconButton onClick={handleCloseSearch} size="small">
              <CloseIcon />
            </IconButton>
          </div>

          <Grid container spacing={2}>
            <Grid item md={10}>
              <Grid container className={classes.searchBox}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="LOCATION"
                    className={clsx(classes.input, classes.inputFirst)}
                    placeholder="City, country"
                    value={location}
                    onChange={handleLocationChange}
                    onReset={setLocationDefult}
                    showReset={location !== ''}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="GUESTS"
                    className={classes.input}
                    placeholder="Add guests"
                    value={guests.adults + guests.children}
                    disabled
                    onReset={setGuestToDefault}
                    showReset={guests.adults + guests.children !== 0}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2} className={classes.searchWrapper}>
              <div className={classes.btnWrapper}>
                <Button
                  startIcon={<SearchIcon />}
                  variant="contained"
                  className={classes.btnSearch}
                  onClick={handleBtnSearchClick}
                >
                  Search
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.control}>
            <Grid item md={5} xs={6}>
              <LocationList
                locations={locationList}
                className={classes.listLocation}
                onChange={handleLocationClick}
              />
            </Grid>
            <Grid item md={5} xs={6}>
              <GuestControl guests={guests} onChange={setGuests} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Backdrop>
  );
};

export default SearchPopup;
