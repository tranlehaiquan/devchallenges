import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { Location } from '../../types';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  locationItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing(4),
  },
  icon: {
    marginRight: spacing(1.5),
  },
}));

type LocationListProps = {
  locations: Location[];
  className?: string;
  onChange: (location: string) => void;
};

const LocationList: React.FC<LocationListProps> = ({
  locations,
  className,
  onChange,
}) => {
  const classes = useStyles();

  const handleClick = (location: string) => {
    onChange(location);
  };

  return (
    <div className={className}>
      {locations.map(location => (
        <p
          className={classes.locationItem}
          key={location.id}
          onClick={() => handleClick(`${location.city}, ${location.country}`)}
        >
          <LocationOnIcon className={classes.icon} /> {location.city},{' '}
          {location.country}
        </p>
      ))}
    </div>
  );
};

export default LocationList;
