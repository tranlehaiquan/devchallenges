import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  wrapper: {
    flexBasis: 473,
    maxWidth: 473,
  },
  box: {
    border: '1px solid #BDBDBD',
    padding: spacing(6),
    borderRadius: spacing(3),
  },
  title: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 700,
    marginBottom: spacing(1.75),
    lineHeight: 1.33,
  },
  description: {
    marginBottom: spacing(4),
    fontSize: 16,
  },
  logo: {
    maxWidth: 130,
  },
  descriptionPage: {},
  boxFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '100%',
    marginTop: spacing(1.5),
  },
}));

interface Props {
  className?: string;
  description?: string;
}

const IdentityBox: React.FC<Props> = ({ children, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.description}>
            <Image
              src="/devchallenges.svg"
              alt="Dev author"
              width={180}
              height={30}
              objectFit="contain"
            />
            <Typo variant="h6" component="h1" className={classes.title}>
              Join thousands of learners from around the world
            </Typo>
            {description && (
              <Typo className={classes.descriptionPage}>{description}</Typo>
            )}
          </div>
          {children}
        </div>
        <div className={classes.boxFooter}>
          <Typo>By Q.Tran</Typo>
          <Typo>devChallenges.io</Typo>
        </div>
      </div>
    </div>
  );
};

export default IdentityBox;
