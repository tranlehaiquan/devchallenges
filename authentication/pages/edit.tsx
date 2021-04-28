import Head from 'next/head';
import router from 'next/router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import UserInfoForm from '../components/UserInfoForm';
import Nav from '../components/Nav';
import ChangePwdForm from '../components/ChangePwdForm';
import { useAuth } from '../src/hooks/useAuth';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    paddingBottom: spacing(3),
  },
  title: {
    textAlign: 'center',
  },
  box: {
    border: `1px solid ${palette.secondary.light}`,
    borderRadius: spacing(1.5),
    padding: spacing(3),
  },
  info: {
    marginBottom: spacing(5),
  },
}));

export default function Edit() {
  const { mounted, user } = useAuth();
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

          <div className={classes.box}>
            <div className={classes.info}>
              <Typography variant="h4" component="h1">
                Change Info
              </Typography>
              <Typography>
                Changes will be reflected to every services
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid sm={6} xs={12} item>
                <UserInfoForm />
              </Grid>
              <Grid sm={6} xs={12} item>
                <ChangePwdForm />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
