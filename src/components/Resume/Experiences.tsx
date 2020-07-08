import { List, ListItem, Avatar, ListItemText, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import { useI18n } from '../../i18n';
import ProfessionalExperience from '../../interfaces/experience';
import Markdown from '../Markdown';

import DateComponent from './DateComponent';

interface ComponentProps {
  experiences: ProfessionalExperience[];
}

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'inline-block',
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 8,
  },
  company: {
    display: 'flex',
    verticalAlign: 'center',
  },
  jobs: {
    display: 'flex',
  },
  list: {
    marginTop: 5,
  },
  listItem: {
    padding: 0,
  },
}));

export default function ResumeExperiences({ experiences }: ComponentProps) {
  const classes = useStyles();
  const texts = useI18n();

  return (
    <div>
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
                  <Typography variant="subtitle2" gutterBottom>
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
    </div>
  );
}
