import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import HomeProfile from '../src/components/Home/Profile';
import HomeProfileLinkCards from '../src/components/Home/ProfileLinkCards';
import LayoutHOC from '../src/components/Layout/HOC';

export function Index(): JSX.Element {
  const content = useCMS();

  return (
    <>
      <HomeProfile profile={content.profile} />
      <HomeProfileLinkCards cards={content.homeCards} />
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Index);
export { getStaticProps };
