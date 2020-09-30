import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import JobItem from '../JobItem';
import JobItemSkeleton from '../JobItem/Skeleton';
import { Job } from '../../types/job';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  jobItem: {
    marginBottom: spacing(2),
  },
}));

interface ListJobProps {
  jobs: Job[];
  loading?: boolean;
  haveMore: boolean;
  onLoadMore: () => void;
}

const ListJob: React.FC<ListJobProps> = ({
  jobs,
  loading,
  haveMore = false,
  onLoadMore,
}) => {
  const classes = useStyles();

  return (
    <>
      {jobs.length === 0 &&
        loading &&
        [...new Array(50)].map((item, index) => (
          <JobItemSkeleton className={classes.jobItem} key={index} />
        ))}
      {jobs.map(job => (
        <JobItem key={job.id} {...job} className={classes.jobItem} />
      ))}
      {haveMore && (
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          disabled={loading}
          onClick={onLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
};

export default ListJob;
