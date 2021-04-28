import Head from 'next/head';
import router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Nav from '../components/Nav';
import { useAuth } from '../src/hooks/useAuth';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingBottom: spacing(3),
  },
  title: {
    textAlign: 'center',
  },
}));

export default function GroupChat() {
  const { user, mounted } = useAuth();
  const classes = useStyles();

  if (mounted && !user) {
    router.push('/login');
  }

  return (
    <>
      <Head>
        <title>Authentication app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.root}>
        <Container>
          <Nav />
          <Typography className={classes.title}>
            🍕🍕🍕 Group chat 🍕🍕🍕
          </Typography>
        </Container>
      </div>
    </>
  );
}
