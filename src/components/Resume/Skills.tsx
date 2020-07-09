import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import SkillGroup from '../../interfaces/skillGroup';

import SkillTag from './SkillTag';

interface ComponentProps {
  skillsGroups: SkillGroup[];
}

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
  },
  list: {
    marginTop: theme.spacing(2),
  },
  listItem: {
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
      alignItems: 'flex-start',
    },
  },
  tagWrapper: {
    alignItems: 'flex-end',
  },
  tag: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      flexFlow: 'column',
      alignItems: 'flex-start',
    },
  },
}));

export default function ResumeSkills({ skillsGroups }: ComponentProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {skillsGroups.map((group) => (
        <React.Fragment key={group.name}>
          <Typography variant="h6" className={classes.header}>
            {group.name}
          </Typography>
          <List>
            {group.skills.map((skill) => (
              <ListItem key={skill.name} className={classes.listItem}>
                <ListItemText>{skill.name}</ListItemText>
                <div className={classes.tagWrapper}>
                  {skill.tags.sort().map((tag) => (
                    <SkillTag className={classes.tag} key={tag} tag={tag} />
                  ))}
                </div>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
