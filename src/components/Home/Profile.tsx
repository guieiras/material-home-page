import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Profile from '../../interfaces/profile';
import ContentfulRichText from '../ContentfulRichText';

import ProfileLinks from './ProfileLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

interface ComponentProps {
  profile: Profile;
}

export default function HomeProfile({ profile }: ComponentProps): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h5" component="h1">
        {profile.name}
      </Typography>
      <Typography variant="caption" component="p">
        {profile.title}
      </Typography>
      <ProfileLinks profile={profile} />

      {ContentfulRichText(profile.bio)}
    </Paper>
  );
}
