import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import SkillGroup from '../../interfaces/skillGroup';

import SkillTag from './SkillTag';

interface ComponentProps {
  skillsGroups: SkillGroup[];
}

const classes = {
  header: 'Skills__header',
  list: 'Skills__list',
  listItem: 'Skills__list-item',
  tagWrapper: 'Skills__tag-wrapper',
  tag: 'Skills__tag',
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.header}`]: {
    marginTop: theme.spacing(3),
  },
  [`& .${classes.list}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${classes.listItem}`]: {
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column',
      alignItems: 'flex-start',
    },
  },
  [`& .${classes.tagWrapper}`]: {
    alignItems: 'flex-end',
  },
  [`& .${classes.tag}`]: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      flexFlow: 'column',
      alignItems: 'flex-start',
    },
  },
}));

export default function ResumeSkills({ skillsGroups }: ComponentProps) {
  return (
    <Root>
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
    </Root>
  );
}
