import Head from 'next/head';
import router from 'next/router';
import { Container, makeStyles, Typography } from '@material-ui/core';
import get from 'lodash/get';

import Nav from '../components/Nav';
import { useAuth } from '../src/hooks/useAuth';
import { useFormik } from 'formik';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingBottom: spacing(3),
  },
  title: {
    textAlign: 'center',
  },
}));

export default function Edit() {
  const { user, mounted } = useAuth();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: get(user, 'displayName', ''),
      description: ''
    },
    onSubmit: () => {},
    enableReinitialize: true,
  });

  if (mounted && !user) {
    router.push('/login');
  }

  return (
    <>
      <Head>
        <title>Authentication app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.root}>
        <Container>
          <Nav />

          <div>
            <Typography>Change Info</Typography>
            <Typography>Changes will be reflected to every services</Typography>

            <div>{formik.values.name}</div>
          </div>
        </Container>
      </div>
    </>
  );
}
