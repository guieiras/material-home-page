import { fetchDataToStaticProps } from '../src/cms';
import LayoutHOC from '../src/components/Layout/HOC';
import DataFetcher from '../src/services/fetcher';

import { Index } from '.';

export async function getStaticPaths() {
  const content = await DataFetcher();

  return {
    paths: content.reduce(
      (memo, { language }) => [...memo, ...(language.default ? [] : [{ params: { language: language.code } }])],
      [],
    ),
    fallback: false,
  };
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Index);
export { getStaticProps };
