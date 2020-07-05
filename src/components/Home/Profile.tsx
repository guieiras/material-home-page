import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Profile from '../../interfaces/profile';
import ContentfulRichText from '../ContentfulRichText';

const useStyles = makeStyles(() => ({
  root: {
    padding: 15,
  },
  caption: {
    marginBottom: 20,
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
      <Typography variant="caption" component="p" className={classes.caption}>
        {profile.title}
      </Typography>

      {ContentfulRichText(profile.bio)}
    </Paper>
  );
}
