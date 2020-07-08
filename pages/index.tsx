import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import HomeProfile from '../src/components/Home/Profile';
import HomeProfileLinkCards from '../src/components/Home/ProfileLinkCards';
import LayoutHOC from '../src/components/Layout/HOC';

export function Index({ currentLanguagePath }: { currentLanguagePath: string }): JSX.Element {
  const content = useCMS();

  return (
    <>
      <HomeProfile profile={content.profile} />
      <HomeProfileLinkCards currentLanguagePath={currentLanguagePath} cards={content.homeCards} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Index, { path: '' });
export { getStaticProps };
