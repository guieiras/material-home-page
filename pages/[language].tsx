import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../src/cms';
import LayoutHOC from '../src/components/Layout/HOC';

import { Index } from '.';

const getStaticPaths = fetchDataToStaticPaths((_, staticPathsFor) => staticPathsFor({}));
const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Index, { path: '' });
export { getStaticPaths, getStaticProps };
