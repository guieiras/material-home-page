import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Email from 'mdi-material-ui/Email';
import Facebook from 'mdi-material-ui/Facebook';
import Github from 'mdi-material-ui/Github';
import Linkedin from 'mdi-material-ui/Linkedin';
import Twitter from 'mdi-material-ui/Twitter';
import React from 'react';

import Profile from '../../interfaces/profile';

interface ComponentProps {
  profile: Profile;
}

export default function HomeBio({ profile: { social } }: ComponentProps): JSX.Element {
  return (
    <Box className={{ mb: 2 }}>
      {social.email && (
        <IconButton color="primary" rel="noreferrer" aria-label="email" href={`mailto:${social.email}`}>
          <Email />
        </IconButton>
      )}
      {social.facebook && (
        <IconButton color="primary" rel="noreferrer" target="_blank" aria-label="facebook" href={social.facebook}>
          <Facebook />
        </IconButton>
      )}
      {social.twitter && (
        <IconButton color="primary" rel="noreferrer" target="_blank" aria-label="twitter" href={social.twitter}>
          <Twitter />
        </IconButton>
      )}
      {social.linkedin && (
        <IconButton color="primary" rel="noreferrer" target="_blank" aria-label="linkedin" href={social.linkedin}>
          <Linkedin />
        </IconButton>
      )}
      {social.github && (
        <IconButton color="primary" rel="noreferrer" target="_blank" aria-label="github" href={social.github}>
          <Github />
        </IconButton>
      )}
    </Box>
  );
}
