import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

import JobItemWrapper from './JobItemWrapper';
import Image from '../Image';
import { Job } from '../../types/job';
import JobDescription from './JobDescription';

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
  },
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
    <JobItemWrapper
      className={clsx(classes.root, className)}
      logo={<Image src={company_logo} alt={company} loading="lazy" />}
      description={
        <JobDescription
          location={location}
          id={id}
          company={company}
          title={title}
          created_at={created_at}
          type={type}
        />
      }
    />
  );
};

export default JobItem;
