import Head from 'next/head';
import router from 'next/router';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import get from 'lodash/get';
import omit from 'lodash/omit';
import { useFormik } from 'formik';
import { useState } from 'react';
import TextField from '../components/CustomTextField';

import Nav from '../components/Nav';
import { useAuth } from '../src/hooks/useAuth';
import getValidationSchema from '../src/yup';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    paddingBottom: spacing(3),
  },
  title: {
    textAlign: 'center',
  },
  box: {
    border: `1px solid ${palette.secondary.light}`,
    borderRadius: spacing(1.5),
    padding: spacing(3),
  },
  boxInner: {
    maxWidth: 400,
  },
  input: {
    marginBottom: spacing(2),
  },
  info: {
    marginBottom: spacing(5),
  }
}));

const validationSchema = getValidationSchema([
  'email',
  'photoURL',
  'displayName',
]);

export default function Edit() {
  const { userInfo, mounted, user, updateUserInfo } = useAuth();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      photoURL: get(userInfo, 'photoURL', ''),
      displayName: get(userInfo, 'displayName', ''),
      bio: get(userInfo, 'bio', ''),
      phoneNumber: get(userInfo, 'phoneNumber', ''),
      email: get(userInfo, 'email', ''),
    },
    onSubmit: (values) => {
      setLoading(true);
      updateUserInfo(omit(values, 'password'));
      setLoading(false);
    },
    enableReinitialize: true,
    validationSchema,
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

          <div className={classes.box}>
            <div className={classes.info}>
              <Typography variant="h4" component="h1">Change Info</Typography>
              <Typography>
                Changes will be reflected to every services
              </Typography>
            </div>
            <div className={classes.boxInner}>
              <img src={formik.values.photoURL} />

              <TextField
                variant="outlined"
                placeholder="Photo url"
                fullWidth
                label="Photo url"
                type="text"
                name="photoURL"
                value={formik.values.photoURL}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.photoURL && formik.errors.photoURL}
                error={!!(formik.touched.photoURL && formik.errors.photoURL)}
                disabled={loading}
                className={classes.input}
              />

              <TextField
                variant="outlined"
                label="Display Name"
                fullWidth
                type="text"
                name="displayName"
                value={formik.values.displayName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.displayName && formik.errors.displayName
                }
                error={
                  !!(formik.touched.displayName && formik.errors.displayName)
                }
                disabled={loading}
                className={classes.input}
              />

              <TextField
                variant="outlined"
                label="Bio"
                fullWidth
                type="text"
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.bio && formik.errors.bio}
                error={!!(formik.touched.bio && formik.errors.bio)}
                disabled={loading}
                className={classes.input}
              />

              <TextField
                variant="outlined"
                label="Phone Number"
                fullWidth
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                error={
                  !!(formik.touched.phoneNumber && formik.errors.phoneNumber)
                }
                disabled={loading}
                className={classes.input}
              />

              <TextField
                variant="outlined"
                label="Email"
                fullWidth
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
                error={!!(formik.touched.email && formik.errors.email)}
                disabled={loading}
                className={classes.input}
              />

              <Button color="primary" variant="contained" onClick={() => formik.handleSubmit()}>Save</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
