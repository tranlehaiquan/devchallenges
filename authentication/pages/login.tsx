import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Head from 'next/head';

import SocialIdentity from '../components/SocialIdentity';
import TextField from '../components/TextField';
import IdentityBox from '../components/IdentityBox';
import Button from '../components/Button';

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

const Login: React.FC<Props> = (props) => {
  const classes = useStyles();

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
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            fullWidth
            type="password"
            className={classes.textField}
          />
          <Button variant="contained" color="primary" fullWidth>
            Start coding now
          </Button>
        </div>

        <SocialIdentity />
      </IdentityBox>
    </>
  );
};

export default Login;
