import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useAuth } from '../../src/hooks/useAuth';

interface Props {
  className?: string;
}

const fields = [
  {
    field: 'displayName',
    name: 'Name',
  },
  {
    field: 'bio',
    name: 'Bio',
  },
  {
    field: 'phoneNumber',
    name: 'Phone',
  },
  {
    field: 'email',
    name: 'Email',
  },
];

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    border: `1px solid ${palette.secondary.light}`,
    borderRadius: spacing(1.5),
  },
  row: {
    display: 'flex',
    padding: spacing(3, 6.25),
    minHeight: 115,
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      padding: spacing(1.5, 2),
    },
  },
  rowHead: {
    justifyContent: 'space-between',
  },
  rowBody: {
    borderTop: `1px solid ${palette.secondary.light}`,
  },
  fieldName: {
    flex: '0 0 280px',
    [breakpoints.down('sm')]: {
      flex: '0 0 120px',
    },
  },
  rootLoading: {
    textAlign: 'center',
    padding: spacing(2),
  },
  userAvatar: {
    display: 'block',
    maxWidth: '100%',
  },
}));

const UserInfo: React.FC<Props> = () => {
  const { userInfo } = useAuth();
  const classes = useStyles();

  if (!userInfo)
    return (
      <div className={classes.rootLoading}>
        <CircularProgress />
        <Typography>Loading</Typography>
      </div>
    );

  return (
    <div className={classes.root}>
      <div className={clsx(classes.row, classes.rowHead)}>
        <div>
          <Typography variant="h5">Profile</Typography>
          <Typography>Some info may be visible to other people</Typography>
        </div>
        <div>
          <Link href="/edit">
            <Button href="/edit" variant="outlined">
              Edit
            </Button>
          </Link>
        </div>
      </div>

      <div className={clsx(classes.row, classes.rowBody)}>
        <div className={classes.fieldName}>
          <Typography>Photo</Typography>
        </div>
        <div>
          <img
            src={userInfo.photoURL}
            className={classes.userAvatar}
            alt="user avatar"
          />
        </div>
      </div>

      {fields.map(({ field, name }) => (
        <div key={name} className={clsx(classes.row, classes.rowBody)}>
          <div className={classes.fieldName}>
            <Typography>{name}</Typography>
          </div>
          <div>{userInfo[field]}</div>
        </div>
      ))}
      <div className={clsx(classes.row, classes.rowBody)}>
        <div className={classes.fieldName}>
          <Typography>Password</Typography>
        </div>
        <div>**********</div>
      </div>
    </div>
  );
};

export default UserInfo;
