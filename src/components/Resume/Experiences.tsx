import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import { useI18n } from '../../i18n';
import ProfessionalExperience from '../../interfaces/experience';

import DateComponent from './DateComponent';
import Markdown from './Markdown';

interface ComponentProps {
  experiences: ProfessionalExperience[];
}

const classes = {
  image: 'Experiences__image',
  company: 'Experiences__company',
  jobs: 'Experiences__jobs',
  list: 'Experiences__list',
  listItem: 'Experiences__list-item',
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.image}`]: {
    display: 'inline-block',
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1.5),
  },
  [`& .${classes.company}`]: {
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  [`& .${classes.jobs}`]: {
    display: 'flex',
  },
  [`& .${classes.list}`]: {
    marginTop: theme.spacing(1),
  },
  [`& .${classes.listItem}`]: {
    padding: 0,
  },
}));

export default function ResumeExperiences({ experiences }: ComponentProps) {
  const texts = useI18n();

  return (
    <Root>
      {experiences.map((company, idx) => (
        <section key={idx}>
          <div className={classes.company}>
            <Avatar variant="rounded" src={company.companyImage} className={classes.image} />
            <Typography component="span" variant="h6">
              {company.company}
            </Typography>
          </div>
          <List disablePadding className={classes.list}>
            {company.jobs.map((job, idx) => (
              <ListItem key={idx} disableGutters className={classes.listItem}>
                <ListItemText>
                  <Typography variant="subtitle1">
                    {job.title}{' '}
                    <Typography component="span" variant="caption" color="textSecondary">
                      (<DateComponent startDate={job.startDate} endDate={job.endDate} i18n={texts.date} />)
                    </Typography>
                  </Typography>
                  <Markdown>{job.jobDescription || ''}</Markdown>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </section>
      ))}
    </Root>
  );
}
