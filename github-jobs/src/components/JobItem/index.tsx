import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { Link } from 'gatsby';

import JobItemWrapper from './JobItemWrapper';
import Image from '../Image';
import { Job } from '../../types/job';
import JobDescription from './JobDescription';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    position: 'relative',
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
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
    <div className={classes.root}>
      <JobItemWrapper
        className={className}
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
      <Link to={`/position/${id}`} className={classes.link}></Link>
    </div>
  );
};

export default JobItem;
