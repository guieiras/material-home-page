import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

import Page from '../../interfaces/page';
import Profile from '../../interfaces/profile';
import ContentfulRichText from '../ContentfulRichText';

import ProfileLinks from './ProfileLinks';

const classes = {
  avatar: 'Profile__avatar',
  info: 'Profile__info'
}

const Root = styled(Paper)(({ theme }) => ({
  [`& .${classes.avatar}`]: {
    display: 'inline-block',
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
    width: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: 'auto',
    },
  },

  [`& .${classes.info}`]: {
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
  return (
    <Root elevation={3} sx={{ p: 2, mb: 3 }}>
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
    </Root>
  );
}
