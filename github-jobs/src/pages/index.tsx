import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import toPairs from 'lodash/toPairs';

import { setJobs, addJobs } from '../store/jobs/actions';
import { getListJob } from '../apis/getListJob';
import JobFilter from '../components/JobsFilter';
import ListJob from '../components/ListJob';
import Container from '../components/Container';
import Layout from '../components/layout';
import Search from '../components/Search';
import Seo from '../components/seo';

const useStyles = makeStyles(({ spacing }) => ({
  main: {
    paddingTop: spacing(2),
  },
}));

const IndexPage = () => {
  const dispatch = useDispatch();
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const description = useSelector(
    (state: RootState) => state.filters.description
  );
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const listJob = toPairs(jobs).map(([id, job]) => job);
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
      dispatch(setJobs(jobsRs));
      setHaveMore(jobsRs.length === 50);
      setLoading(false);
    })();
  }, [description, location, fullTime]);

  const handleLoadMore = async () => {
    setPage(page + 1);
    const cacheScroll = document.documentElement.scrollTop;
    const jobsRs = await getListJob({
      full_time: fullTime,
      location,
      description,
      page: page + 1,
    });
    dispatch(addJobs(jobsRs));
    setHaveMore(jobsRs.length === 50);
    document.documentElement.scrollTop = cacheScroll;
    return;
  };

  return (
    <Layout>
      <Seo title="Github jobs" />
      <Search />

      <Container className={classes.main}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <JobFilter />
          </Grid>
          <Grid item md={9} xs={12}>
            <ListJob
              haveMore={haveMore}
              jobs={listJob}
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
