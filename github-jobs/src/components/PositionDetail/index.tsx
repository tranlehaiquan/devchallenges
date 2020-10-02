import React, { useEffect } from 'react';
import { Grid, Typography as Typo } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import CompanyInfo from '../CompanyInfo';
import DistanceToNow from '../DistanceToNow';
import JobType from '../JobType';
import Link from '../Link';
import { getJobById } from '../../apis/getListJob';
import { RootState } from '../../store';
import { addJobs } from '../../store/jobs/actions';
import Container from '../Container';

interface PositionDetailProps {
  id: string;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  howToApply: {
    wordBreak: 'break-word',
    marginTop: spacing(-1),
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing(2),
  },
  backIcon: {
    marginRight: spacing(1.5),
  },
  time: {
    marginBottom: spacing(2),
    color: palette.grey[500]
  },
}));

const PositionDetail: React.FC<PositionDetailProps> = ({ id }) => {
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const dispatch = useDispatch();
  const jobDetail = jobs[id];
  const classes = useStyles();

  useEffect(() => {
    if (!jobDetail) {
      (async () => {
        const jobRs = await getJobById(id);
        dispatch(addJobs([jobRs]));
      })();
    }
  }, []);

  if (!jobDetail) {
    return (
      <Container>
        <Typo>Loading</Typo>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Link to="/" className={classes.backLink}>
            <KeyboardBackspaceIcon className={classes.backIcon} /> Back to
            Search
          </Link>
          <Typo>How to Apply: </Typo>
          <Typo
            variant="body2"
            component="div"
            className={classes.howToApply}
            dangerouslySetInnerHTML={{
              __html: jobDetail.how_to_apply,
            }}></Typo>
        </Grid>
        <Grid item md={9}>
          <Typo variant="h5">
            {jobDetail.title} <JobType>{jobDetail.type}</JobType>
          </Typo>
          <DistanceToNow
            time={formatDistanceToNow(new Date(jobDetail.created_at))}
            className={classes.time}
          />

          <CompanyInfo
            company={jobDetail.company}
            companyLogo={jobDetail.company_logo}
            location={jobDetail.location}
          />

          <Typo
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{
              __html: jobDetail.description,
            }}></Typo>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PositionDetail;
