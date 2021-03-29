import React from 'react';
import IdentityBox from '../components/IdentityBox';
import Typo from "@material-ui/core/Typography";
import { TextField, Button } from "@material-ui/core";
import Link from "next/link";

interface Props {
  className?: string;
};

const Register: React.FC<Props> = (props) => {
  return (
    <IdentityBox>
      <Typo variant="h6">
        Join thousands of learners from around the world{" "}
      </Typo>
      <Typo>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </Typo>

      <div>
        <TextField placeholder="Email" fullWidth type="text" />
        <TextField placeholder="Password" fullWidth type="password" />
      </div>

      <Button variant="contained" color="primary" fullWidth>
        Start coding now
      </Button>

      <Typo>or continue with these social profile</Typo>

      <Typo>
        Adready a member? <Link href="/login">Login</Link>
      </Typo>
    </IdentityBox>
  );
}

export default Register;