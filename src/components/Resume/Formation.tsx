import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

import AcademicFormation from '../../interfaces/formation';

import Markdown from './Markdown';

interface ComponentProps {
  formation: AcademicFormation[];
}

export default function ResumeFormation({ formation }: ComponentProps) {
  return (
    <List disablePadding sx={{ mt: 3 }}>
      {formation.map((education, idx) => (
        <ListItem key={idx} disableGutters sx={{ p: 0 }} style={{ alignItems: 'flex-start' }}>
          <ListItemAvatar>
            <Avatar variant="rounded" src={education.academyImage} />
          </ListItemAvatar>
          <ListItemText sx={{ m: 0 }}>
            <Typography variant="h6" sx={{ mb: 0 }} style={{ lineHeight: 1 }}>
              {education.academy}
            </Typography>
            <Typography component="p" variant="subtitle1" gutterBottom>
              {education.title}{' '}
              <Typography component="span" variant="caption" color="textSecondary">
                {education.startYear}-{education.endYear}
              </Typography>
            </Typography>
            <Markdown>{education.description || ''}</Markdown>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
