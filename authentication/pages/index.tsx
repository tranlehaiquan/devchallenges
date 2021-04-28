import Head from 'next/head';
import router from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Nav from '../components/Nav';
import UserInfo from '../components/UserInfo';
import { useAuth } from '../src/hooks/useAuth';

const useStyles = makeStyles(({ spacing }) => ({
  des: {
    textAlign: 'center',
    marginBottom: spacing(5),
  },
  root: {
    paddingBottom: spacing(3),
  },
}));

export default function Home() {
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
      <Nav />
      <div className={classes.root}>
        <Container>
          <div className={classes.des}>
            <Typography variant="h4" component="h1">
              Personal info
            </Typography>
            <Typography>Basic info, like your name and photo</Typography>
          </div>
          <UserInfo />
        </Container>
      </div>
    </>
  );
}
