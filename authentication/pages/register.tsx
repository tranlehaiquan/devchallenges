import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Head from 'next/head';

import SocialIdentity from '../components/SocialIdentity';
import TextField from '../components/TextField';
import IdentityBox from '../components/IdentityBox';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import firebaseClient from '../src/firebaseClient';
import getValidationSchema from '../src/yup';

const validationSchema = getValidationSchema([
  'email',
  'password',
  'passwordConfirm',
]);
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

const Register: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await firebaseClient
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
        setLoading(false);
        router.push('/');
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
  });

  const handleSubmit = () => formik.handleSubmit();

  return (
    <>
      <Head>
        <title>Register</title>
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
          <TextField
            variant="outlined"
            placeholder="Confirm Password"
            fullWidth
            type="password"
            name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classes.textField}
            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            error={
              !!(
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
              )
            }
            disabled={loading}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}>
            Register your account
          </Button>
        </div>

        <SocialIdentity type="login" />
      </IdentityBox>
    </>
  );
};

export default Register;
