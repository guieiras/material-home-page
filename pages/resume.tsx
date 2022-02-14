import Typography from '@mui/material/Typography';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import ContentfulRichText from '../src/components/ContentfulRichText';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';
import ResumeExperiences from '../src/components/Resume/Experiences';
import ResumeFormation from '../src/components/Resume/Formation';
import ResumeSkills from '../src/components/Resume/Skills';
import { useI18n } from '../src/i18n';

export function Resume(): JSX.Element {
  const texts = useI18n();
  const content = useCMS();

  return (
    <>
      <Meta
        title={`${content.pages.resume.title} - ${content.profile.name}`}
        description={content.pages.resume.description}
      />
      <Typography variant="h3" component="h1" sx={{ mt: 3 }}>
        {content.pages.resume.title}
      </Typography>
      {ContentfulRichText(content.pages.resume.content)}
      <Typography variant="h5" component="h2" sx={{ mt: 5 }}>
        {texts.pages.resume.experiences}
      </Typography>
      <ResumeExperiences experiences={content.professional} />
      <Typography variant="h5" component="h2" sx={{ mt: 5 }}>
        {texts.pages.resume.formation}
      </Typography>
      <ResumeFormation formation={content.formation} />
      <Typography variant="h5" component="h2" sx={{ mt: 5 }}>
        {texts.pages.resume.skills}
      </Typography>
      <ResumeSkills skillsGroups={content.skills} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Resume, { path: 'resume' });
export { getStaticProps };
