import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { Job } from '../types/job';
import { getListJob } from '../apis/getListJob';
import JobFilter from '../components/JobsFilter';
import ListJob from '../components/ListJob';
import Container from '../components/Container';
import Layout from '../components/layout';
import Search from '../components/Search';

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    paddingTop: spacing(2),
  },
}));

const IndexPage = () => {
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState<number>(1);
  const description = useSelector(
    (state: RootState) => state.filters.description
  );
  const location = useSelector((state: RootState) => state.filters.location);
  const fullTime = useSelector((state: RootState) => state.filters.fullTime);

  useEffect(() => {
    (async () => {
      setPage(1);
      setLoading(true);
      const jobsRs = await getListJob({
        full_time: fullTime,
        location,
        description,
      });
      setJobs(jobsRs);
      setHaveMore(jobsRs.length === 50);
      setLoading(false);
    })();
  }, [description, location, fullTime]);

  /**
   * Run only if user view more
   */
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        const cacheScroll = document.documentElement.scrollTop;
        setLoading(true);
        const jobsRs = await getListJob({
          full_time: fullTime,
          location,
          description,
          page,
        });
        setJobs([...jobs, ...jobsRs]);
        setHaveMore(jobsRs.length === 50);
        setLoading(false);
        document.documentElement.scrollTop = cacheScroll;
      })();
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Layout>
      <Search />

      <Container className={classes.main}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <JobFilter />
          </Grid>
          <Grid item md={9} xs={12}>
            <ListJob
              haveMore={haveMore}
              jobs={jobs}
              loading={loading}
              onLoadMore={handleLoadMore}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
