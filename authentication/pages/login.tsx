import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Head from 'next/head';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Typo from '@material-ui/core/Typography';

import SocialIdentity from '../components/SocialIdentity';
import TextField from '../components/TextField';
import IdentityBox from '../components/IdentityBox';
import Button from '../components/Button';
import firebaseClient from '../src/firebaseClient';
import getValidationSchema from '../src/yup';

const validationSchema = getValidationSchema(['email', 'password']);
interface Props {
  className?: string;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  description: {
    marginBottom: spacing(3),
  },
  textField: {
    marginBottom: spacing(1.75),
  },
  error: {
    marginBottom: spacing(1.5),
    color: palette.error.light,
  },
}));

const desc =
  'Master web development by making real-life projects. There are multiple paths for you to choose';

const Login: React.FC<Props> = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const classes = useStyles();
  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await firebaseClient
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
        setLoading(false);
        router.push('/');
      } catch (err) {
        setLoading(false);
        setError(err.message);
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
        <Typo className={classes.error}>{error}</Typo>
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
            helperText={formik.touched.email && formik.errors.email}
            error={!!(formik.touched.email && formik.errors.email)}
            disabled={loading}
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
            helperText={formik.touched.password && formik.errors.password}
            error={!!(formik.touched.password && formik.errors.password)}
            disabled={loading}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            onClick={handleSubmit}>
            Start coding now
          </Button>
        </div>

        <SocialIdentity
          onError={(error) => {
            setError(error.message);
          }}
        />
      </IdentityBox>
    </>
  );
};

export default Login;
