import { makeStyles, Button } from '@material-ui/core';
import get from 'lodash/get';
import pick from 'lodash/pick';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import UploadAvatar from 'components/UploadAvatar';

import TextField from '../CustomTextField';
import { useAuth } from '../../src/hooks/useAuth';
import getValidationSchema from '../../src/yup';

const useStyles = makeStyles(({ spacing }) => ({
  input: {
    marginBottom: spacing(2),
  },
  info: {
    marginBottom: spacing(5),
  },
  actions: {
    textAlign: 'center',
  },
}));

const validationSchema = getValidationSchema([
  'email',
  // 'photoURL',
  'displayName',
]);

export default function Edit() {
  const { userInfo, updateUserInfo } = useAuth();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const snackbar = useSnackbar();
  const formik = useFormik({
    initialValues: {
      displayName: get(userInfo, 'displayName', ''),
      bio: get(userInfo, 'bio', ''),
      phoneNumber: get(userInfo, 'phoneNumber', ''),
      email: get(userInfo, 'email', ''),
    },
    onSubmit: async (values) => {
      setLoading(true);
      await updateUserInfo(
        pick(values, ['displayName', 'bio', 'phoneNumber', 'email'])
      );
      snackbar.enqueueSnackbar('Update success', {
        preventDuplicate: true,
        variant: 'success',
      });
      setLoading(false);
    },
    enableReinitialize: true,
    validationSchema,
  });

  return (
    <>
      <UploadAvatar src={get(userInfo, 'photoURL', '')} onChange={(image) => {
        console.log(image);
      }} />

      <TextField
        variant="outlined"
        label="Display Name"
        fullWidth
        type="text"
        name="displayName"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.displayName && formik.errors.displayName}
        error={!!(formik.touched.displayName && formik.errors.displayName)}
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
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
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

      <div className={classes.actions}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => formik.handleSubmit()}
          disabled={loading || !formik.dirty}>
          Update User Info
        </Button>
      </div>
    </>
  );
}
