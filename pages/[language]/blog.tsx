import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../src/cms';
import LayoutHOC from '../../src/components/Layout/HOC';
import { Blog } from '../blog';

const getStaticPaths = fetchDataToStaticPaths((_, staticPathsFor) => staticPathsFor({}));
const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Blog, { path: 'blog' });
export { getStaticPaths, getStaticProps };
