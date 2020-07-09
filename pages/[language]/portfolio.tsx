import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../src/cms';
import LayoutHOC from '../../src/components/Layout/HOC';
import { Portfolio } from '../portfolio';

const getStaticPaths = fetchDataToStaticPaths((_, staticPathsFor) => staticPathsFor({}));
const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Portfolio, { path: 'portfolio' });
export { getStaticPaths, getStaticProps };
