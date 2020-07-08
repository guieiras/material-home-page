import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import AcademicFormation from '../../interfaces/formation';
import Markdown from '../Markdown';

interface ComponentProps {
  formation: AcademicFormation[];
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 0,
  },
  title: {
    lineHeight: 1,
    marginBottom: 5,
  },
  image: {
    display: 'inline-block',
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 8,
  },
  listItem: {
    alignItems: 'flex-start',
    padding: 0,
  },
}));

export default function ResumeFormation({ formation }: ComponentProps) {
  const classes = useStyles();

  return (
    <List disablePadding>
      {formation.map((education, idx) => (
        <ListItem key={idx} disableGutters className={classes.listItem}>
          <ListItemAvatar>
            <Avatar variant="rounded" src={education.academyImage} className={classes.image} />
          </ListItemAvatar>
          <ListItemText className={classes.wrapper}>
            <Typography variant="h6" className={classes.title}>
              {education.academy}
            </Typography>
            <Typography component="p" variant="subtitle2" gutterBottom>
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
