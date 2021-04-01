import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Image from 'next/image';

import { useAuth } from '../../src/hooks/useAuth';

interface Props {
  className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
}));

const Nav: React.FC<Props> = () => {
  const { user } = useAuth();
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Image
          src="/devchallenges.svg"
          alt="Dev author"
          width={180}
          height={30}
          objectFit="contain"
        />

        {user && user.displayName}
      </div>
    </Container>
  );
};

export default Nav;
