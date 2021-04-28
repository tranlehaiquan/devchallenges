import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useState } from 'react';
import { Formik } from 'formik';

import FormikTextField from '../CustomTextField/FormikTextField';
import getValidationSchema from '../../src/yup';
import { useAuth } from '../../src/hooks/useAuth';
import { useSnackbar } from 'notistack';

interface Props {
  className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  input: {
    marginBottom: spacing(2),
  },
  actions: {
    textAlign: 'center',
  },
}));

const validationSchema = getValidationSchema(['password', 'passwordConfirm']);

const ChangePwdForm: React.FC<Props> = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const classes = useStyles();
  const configFormik = {
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async ({ password }) => {
      setLoading(true);
      await user.updatePassword(password);
      setLoading(false);
      enqueueSnackbar('Success update password', {
        variant: 'success',
      });
    },
    validationSchema,
  };

  return (
    <Formik {...configFormik}>
      {({ dirty, handleSubmit }) => (
        <>
          <FormikTextField
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            name="password"
            id="password"
            className={classes.input}
            disabled={loading}
          />
          <FormikTextField
            variant="outlined"
            fullWidth
            label="Confirm Password"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            className={classes.input}
            disabled={loading}
          />

          <div className={classes.actions}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleSubmit()}
              disabled={loading || !dirty}>
              Update Password
            </Button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default ChangePwdForm;
