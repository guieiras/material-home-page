import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import AcademicFormation from '../../interfaces/formation';

import Markdown from './Markdown';

interface ComponentProps {
  formation: AcademicFormation[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  wrapper: {
    margin: 0,
  },
  title: {
    lineHeight: 1,
    marginBottom: 5,
  },
  listItem: {
    alignItems: 'flex-start',
    padding: 0,
  },
}));

export default function ResumeFormation({ formation }: ComponentProps) {
  const classes = useStyles();

  return (
    <List disablePadding className={classes.root}>
      {formation.map((education, idx) => (
        <ListItem key={idx} disableGutters className={classes.listItem}>
          <ListItemAvatar>
            <Avatar variant="rounded" src={education.academyImage} />
          </ListItemAvatar>
          <ListItemText className={classes.wrapper}>
            <Typography variant="h6" className={classes.title}>
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
