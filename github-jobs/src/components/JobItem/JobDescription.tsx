import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'gatsby';

import JobType from '../JobType';
import DistanceToNow from '../DistanceToNow';
import HireLocation from '../HireLocation';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  jobInfos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: spacing(3),
    [breakpoints.down('sm')]: {
      display: 'block',
      marginTop: spacing(1),
    },
  },
  durationAndLocation: {
    display: 'inline-flex',
    color: palette.grey[500],
    '& p': {
      display: 'inline-flex',
    },
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  title: {
    textDecoration: 'none',
    color: palette.primary.main
  },
  distanceToNow: {
    marginLeft: spacing(1),
  },
}));

interface JobItemProps {
  className?: string;
  id: string,
  company: string,
  location: string,
  title: string,
  created_at: string,
  type: string,
}

const JobDescription: React.FC<JobItemProps> = ({
  id,
  company,
  location,
  title,
  created_at,
  type,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typo variant="subtitle2">{company}</Typo>

      <Typo variant="h6">
        <Link className={classes.title} to={`/position/${id}`}>
          {title}
        </Link>
      </Typo>

      <div className={classes.jobInfos}>
        <JobType>{type}</JobType>

        <div className={classes.durationAndLocation}>
          <HireLocation location={location} />
          <DistanceToNow
            time={formatDistanceToNow(new Date(created_at))}
            className={classes.distanceToNow}
          />
        </div>
      </div>
    </>
  );
};

export default JobDescription;
