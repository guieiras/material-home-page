import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import HomeProfile from '../src/components/Home/Profile';
import HomeProfileLinkCards from '../src/components/Home/ProfileLinkCards';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';

export function Index({ currentLanguagePath }: { currentLanguagePath: string }): JSX.Element {
  const content = useCMS();

  return (
    <>
      <Meta
        title={`${content.pages.index.title} - ${content.profile.name}`}
        description={content.pages.index.description}
      />
      <HomeProfile profile={content.profile} page={content.pages.index} />
      <HomeProfileLinkCards currentLanguagePath={currentLanguagePath} cards={content.homeCards} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Index, { path: '' });
export { getStaticProps };
