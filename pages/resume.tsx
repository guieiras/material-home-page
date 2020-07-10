import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';
import ResumeExperiences from '../src/components/Resume/Experiences';
import ResumeFormation from '../src/components/Resume/Formation';
import ResumeSkills from '../src/components/Resume/Skills';
import { useI18n } from '../src/i18n';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
  },
  sectionHeader: {
    marginTop: theme.spacing(5),
  },
}));

export function Resume(): JSX.Element {
  const classes = useStyles();
  const texts = useI18n();
  const content = useCMS();

  return (
    <>
      <Meta title={`${texts.pages.resume.title} - ${content.profile.name}`} />
      <Typography variant="h3" component="h1" className={classes.title}>
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
      <Typography variant="h5" component="h2" className={classes.sectionHeader}>
        {texts.pages.resume.skills}
      </Typography>
      <ResumeSkills skillsGroups={content.skills} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Resume, { path: 'resume' });
export { getStaticProps };
