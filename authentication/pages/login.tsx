import React from "react";
import Typo from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Head from "next/head";
import SocialIdentity from '../components/SocialIdentity';

import IdentityBox from "../components/IdentityBox";
import Button from "../components/Button";

interface Props {
  className?: string;
}

const useStyles = makeStyles(() => ({
  description: {},
}));

const desc =
  "Master web development by making real-life projects. There are multiple paths for you to choose";

const Login: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <IdentityBox description={desc}>
        <div>
          <TextField placeholder="Email" fullWidth type="text" />
          <TextField placeholder="Password" fullWidth type="password" />
        </div>

        <Button variant="contained" color="primary" fullWidth>
          Start coding now
        </Button>

        <SocialIdentity />

        <Typo>
          Doesn't have an account? <Link href="/">Register</Link>
        </Typo>
      </IdentityBox>
    </>
  );
};

export default Login;
