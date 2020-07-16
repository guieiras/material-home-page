import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Page from '../../interfaces/page';
import Profile from '../../interfaces/profile';
import ContentfulRichText from '../ContentfulRichText';

import ProfileLinks from './ProfileLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    display: 'inline-block',
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
    width: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: 'auto',
    },
  },
  info: {
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
}));

interface ComponentProps {
  profile: Profile;
  page: Page;
}

export default function HomeProfile({ profile, page }: ComponentProps): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      {profile.profilePicture && <Avatar className={classes.avatar} src={profile.profilePicture} />}
      <div className={classes.info}>
        <Typography variant="h5" component="h1">
          {profile.name}
        </Typography>
        <Typography variant="caption" component="p">
          {profile.title}
        </Typography>
        <ProfileLinks profile={profile} />
      </div>

      {ContentfulRichText(page.content)}
    </Paper>
  );
}
