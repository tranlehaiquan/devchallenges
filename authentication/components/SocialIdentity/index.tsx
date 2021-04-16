import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import firebaseClient, { providerGithub } from '../../src/firebaseClient';
import { useRouter } from 'next/router';
import noop from 'lodash/noop';

interface Props {
  className?: string;
  type?: 'login' | 'register';
  onError?: (error: { email: string; message: string }) => void;
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    textAlign: 'center',
    color: '#828282',
    fontSize: 14,
  },
  title: {
    marginBottom: spacing(1),
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    padding: spacing(1, 0),
  },
  social: {
    padding: spacing(0, 1),
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
}));

// const listSocial = ['Facebook', 'Google', 'Github', 'Twitter'];
const listSocial = ['Github'];

const socialMapProvide = {
  Github: providerGithub,
};

const SocialIndentity: React.FC<Props> = ({
  type = 'register',
  onError = noop,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const handleSocialClick = async (social: string) => {
    const provide = socialMapProvide[social];
    try {
      await firebaseClient.auth().signInWithPopup(provide);
      router.push('/');
    } catch (err) {
      onError(err);
    }
  };

  return (
    <div className={classes.root}>
      <Typo className={classes.title}>
        or continue with these social profile
      </Typo>
      <div className={classes.socials}>
        {listSocial.map((social) => (
          <button
            key={social}
            className={classes.social}
            onClick={() => handleSocialClick(social)}>
            <img
              src={`/${social}.svg`}
              alt={social}
            />
          </button>
        ))}
      </div>

      {type === 'register' && (
        <Typo>
          Doesn't have an account? <Link href="/register">Register</Link>
        </Typo>
      )}

      {type === 'login' && (
        <Typo>
          Already nember? <Link href="/login">Login</Link>
        </Typo>
      )}
    </div>
  );
};

export default SocialIndentity;
