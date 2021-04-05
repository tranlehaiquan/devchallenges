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
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
  },
  user: {
    justifySelf: 'end',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: spacing(1),
    borderRadius: 5,
    overflow: 'hidden',
    objectFit: 'cover',
  }
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

        {user && (
          <div className={classes.user}>
            <img className={classes.avatar} src={user.photoURL} alt="user avatar" />
            {user.displayName}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Nav;
