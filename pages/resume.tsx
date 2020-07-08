import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import LayoutHOC from '../src/components/Layout/HOC';
import ResumeExperiences from '../src/components/Resume/Experiences';
import ResumeFormation from '../src/components/Resume/Formation';
import { useI18n } from '../src/i18n';

const useStyles = makeStyles(() => ({
  sectionHeader: {
    marginBottom: 20,
  },
}));

export function Resume(): JSX.Element {
  const classes = useStyles();
  const texts = useI18n();
  const content = useCMS();

  return (
    <>
      <Typography variant="h3" component="h1" className={classes.sectionHeader}>
        {texts.pages.resume.title}
      </Typography>
      <Typography variant="h5" component="h2" className={classes.sectionHeader}>
        {texts.pages.resume.experiences}
      </Typography>
      <ResumeExperiences experiences={content.professional} />
      <Typography variant="h5" component="h2" className={classes.sectionHeader}>
        {texts.pages.resume.formation}
      </Typography>
      <ResumeFormation formation={content.formation} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Resume, { path: 'resume' });
export { getStaticProps };
