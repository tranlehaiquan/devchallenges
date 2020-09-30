import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import clsx from 'clsx';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PublicIcon from '@material-ui/icons/Public';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import Image from '../Image';
import { Job } from '../../types/job';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    display: 'flex',
    borderRadius: spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    backgroundColor: palette.common.white,
    padding: spacing(1.75),
  },
  logo: {
    width: 120,
    maxHeight: 100,
    display: 'flex',
    alignItems: 'center',
    marginRight: spacing(1.75),
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
    [breakpoints.down('sm')]: {
      width: 50,
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
}));

interface JobItemProps extends Job {
  className?: string;
}

const JobItem: React.FC<JobItemProps> = ({
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
        <Typo variant="h6">{title}</Typo>
        <div className={classes.jobInfos}>
          <Typo variant="subtitle2" className={classes.jobType}>
            {type}
          </Typo>

          <div className={classes.durationAndLocation}>
            <Typo variant="subtitle2" className={classes.jobTime}>
              <QueryBuilderIcon /> {formatDistanceToNow(new Date(created_at))}
            </Typo>
            <Typo variant="subtitle2" className={classes.jobTime}>
              <PublicIcon /> {location}
            </Typo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
