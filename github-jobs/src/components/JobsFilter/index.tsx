import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography as Typo,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PublicIcon from '@material-ui/icons/Public';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useSelector, useDispatch } from 'react-redux';

import { setFullTime, setLocation } from '../../store/filters/actions';
import { RootState } from 'store';
import { string } from 'prop-types';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {},
  fullTimeSection: {
    marginBottom: spacing(4),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1.5),
    },
  },
  locationSection: {},
  locationLabel: {
    color: '#B9BDCF',
    fontWeight: 600,
    marginBottom: spacing(1.75),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1),
    },
  },
  locationInput: {
    marginBottom: spacing(3),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1),
    },
  },
  locationIcon: {
    color: palette.grey[500],
  },
}));

const JobsFilter = () => {
  const [inputLocation, setInputLocation] = useState<string>('');
  const classes = useStyles();
  const fullTime = useSelector((state: RootState) => state.filters.fullTime);
  const location = useSelector((state: RootState) => state.filters.location);
  const dispatch = useDispatch();

  const handleFullTimeChange = (
    event: React.ChangeEvent<{}>,
    checked: boolean
  ) => {
    dispatch(setFullTime(checked));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocation(event.target.value);
  };

  const handleLocationOptionCheck = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setLocation(event.target.value));
  };

  const handleInputOnBlur = () => {
    dispatch(setLocation(inputLocation));
  };

  useEffect(() => {
    setInputLocation(location);
  }, [location]);
  
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(setLocation(inputLocation));
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
            checked={fullTime}
            onChange={handleFullTimeChange}
          />
        }
        label="Full time"
        className={classes.fullTimeSection}
      />

      <div>
        <Typo className={classes.locationLabel}>LOCATION</Typo>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="City, state, zip code or country"
          className={classes.locationInput}
          value={inputLocation}
          onChange={handleInputChange}
          onBlur={handleInputOnBlur}
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className={classes.locationIcon}>
                <PublicIcon />
              </InputAdornment>
            ),
          }}
        />
        <RadioGroup
          name="location"
          onChange={handleLocationOptionCheck}
          value={location}>
          <FormControlLabel
            value="london"
            control={<Radio color="primary" />}
            label="London"
          />
          <FormControlLabel
            value="amsterdam"
            control={<Radio color="primary" />}
            label="Amsterdam"
          />
          <FormControlLabel
            value="new york "
            control={<Radio color="primary" />}
            label="New York"
          />
          <FormControlLabel
            value="berlin"
            control={<Radio color="primary" />}
            label="Berlin"
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default JobsFilter;
