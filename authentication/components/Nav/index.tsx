import React, { useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';

import { useAuth } from '../../src/hooks/useAuth';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
}

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
  },
  user: {
    justifySelf: 'end',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: spacing(1),
    borderRadius: 5,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  displayName: {
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatarLink: {
    display: 'flex',
  },
}));

const Nav: React.FC<Props> = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef(null);
  const { user, signOut, userInfo } = useAuth();
  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Container>
      <div className={classes.root}>
        <Link href="/">
          <a className={classes.avatarLink}>
            <img src="/devchallenges.svg" alt="Dev author" />
          </a>
        </Link>

        {user && userInfo && (
          <>
            <button
              onClick={handleToggle}
              className={classes.user}
              ref={anchorRef}>
              <img
                className={classes.avatar}
                src={userInfo.photoURL}
                alt="user avatar"
              />
              <Typography className={classes.displayName}>
                {userInfo.displayName || userInfo.email}
              </Typography>
            </button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={() => router.push('/')}>
                          My Profile
                        </MenuItem>
                        <MenuItem onClick={() => router.push('/groupChat')}>
                          Group Chat
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        )}
      </div>
    </Container>
  );
};

export default React.memo(Nav);
