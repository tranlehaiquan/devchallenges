import Head from 'next/head';
import router from 'next/router';
import {
  Container,
  makeStyles,
  Typography,
  TextField,
} from '@material-ui/core';
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
      bio: '',
      phoneNumber: '',
      email: '',
      password: '',
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

            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={classes.textField}
              helperText={formik.touched.name && formik.errors.name}
              error={!!(formik.touched.name && formik.errors.name)}
              // disabled={loading}
            />
            
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              type="text"
              name="name"
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={classes.textField}
              helperText={formik.touched.bio && formik.errors.bio}
              error={!!(formik.touched.bio && formik.errors.bio)}
              // disabled={loading}
            />
            
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              type="text"
              name="name"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={classes.textField}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
              // disabled={loading}
            />
            
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              type="email"
              name="name"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={classes.textField}
              helperText={formik.touched.email && formik.errors.email}
              error={!!(formik.touched.email && formik.errors.email)}
              // disabled={loading}
            />
            
            <TextField
              variant="outlined"
              placeholder="Name"
              fullWidth
              type="password"
              name="name"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // className={classes.textField}
              helperText={formik.touched.password && formik.errors.password}
              error={!!(formik.touched.password && formik.errors.password)}
              // disabled={loading}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
