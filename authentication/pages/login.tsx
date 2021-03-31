import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Head from 'next/head';
import { useFormik } from 'formik';
import { useRouter } from 'next/router'

import SocialIdentity from '../components/SocialIdentity';
import TextField from '../components/TextField';
import IdentityBox from '../components/IdentityBox';
import Button from '../components/Button';
import firebaseClient from '../src/firebaseClient';

interface Props {
  className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  description: {
    marginBottom: spacing(3),
  },
  textField: {
    marginBottom: spacing(1.75),
  },
}));

const desc =
  'Master web development by making real-life projects. There are multiple paths for you to choose';

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const user = await firebaseClient.auth().signInWithEmailAndPassword(
          values.email,
          values.password
        );
        router.push('/');

        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleSubmit = () => formik.handleSubmit();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <IdentityBox description={desc}>
        <div className={classes.description}>
          <TextField
            variant="outlined"
            placeholder="Email"
            fullWidth
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            fullWidth
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.textField}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}>
            Start coding now
          </Button>
        </div>

        <SocialIdentity />
      </IdentityBox>
    </>
  );
};

export default Login;
