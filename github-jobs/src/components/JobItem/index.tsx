import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import clsx from 'clsx';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'gatsby';

import JobType from '../JobType';
import DistanceToNow from '../DistanceToNow';
import HireLocation from '../HireLocation';
import Image from '../Image';
import { Job } from '../../types/job';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    display: 'flex',
    borderRadius: spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    backgroundColor: palette.common.white,
    padding: spacing(1.75),
    [breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  logo: {
    width: 120,
    display: 'flex',
    alignItems: 'center',
    marginRight: spacing(1.75),
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
    [breakpoints.down('xs')]: {
      width: '100%',
      justifyContent: 'flex-start',
      marginBottom: spacing(1),
      '& img': {
        display: 'block',
        width: '100%',
      },
    },
  },
  jobType: {
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: spacing(0.5),
    padding: spacing(0.5, 1),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1),
    },
  },
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
  jobDes: {
    flex: 1,
  },
  jobTime: {
    display: 'inline-flex',
    alignItems: 'center',
    '&:not(:last-of-type)': {
      marginRight: spacing(2),
    },
  },
  title: {
    textDecoration: 'none',
  },
  distanceToNow: {
    marginLeft: spacing(1),
  }
}));

interface JobItemProps extends Job {
  className?: string;
}

const JobItem: React.FC<JobItemProps> = ({
  id,
  className,
  company_logo,
  company,
  location,
  title,
  created_at,
  type,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <div className={classes.logo}>
        <Image src={company_logo} alt={company} loading="lazy" />
      </div>
      <div className={classes.jobDes}>
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
            <DistanceToNow time={formatDistanceToNow(new Date(created_at))} className={classes.distanceToNow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
