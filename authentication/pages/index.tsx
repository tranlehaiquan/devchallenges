import Head from 'next/head';
import router from 'next/router';
import { Container, makeStyles, Typography } from '@material-ui/core';

import Nav from '../components/Nav';
import { useAuth } from '../src/hooks/useAuth';

const useStyles = makeStyles(({ spacing }) => ({
  des: {
    textAlign: 'center',
    marginBottom: spacing(5)
  },
}));

export default function Home() {
  const { user, mounted, signOut } = useAuth();
  const classes = useStyles();

  if (mounted && !user) {
    router.push('/login');
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <Head>
        <title>Authentication app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Container>
        <div className={classes.des}>
          <Typography variant="h4" component="h1">
            Personal info
          </Typography>
          <Typography>Basic info, like your name and photo</Typography>
        </div>
        {user && (
          <>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="user avatar" />
            <button onClick={handleLogout}>Sign out</button>
          </>
        )}
      </Container>
    </>
  );
}
