import React, { useRef, useState } from 'react';
import {
  ClickAwayListener,
  Container,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
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
  const { user, signOut } = useAuth();
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
            <Image
              src="/devchallenges.svg"
              alt="Dev author"
              width={180}
              height={30}
              objectFit="contain"
            />
          </a>
        </Link>

        {user && (
          <>
            <button
              onClick={handleToggle}
              className={classes.user}
              ref={anchorRef}>
              <img
                className={classes.avatar}
                src={user.photoURL}
                alt="user avatar"
              />
              <Typography className={classes.displayName}>
                {user.displayName}
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
