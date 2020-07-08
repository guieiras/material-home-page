import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../src/cms';
import LayoutHOC from '../../src/components/Layout/HOC';
import { Resume } from '../resume';

const getStaticPaths = fetchDataToStaticPaths((_, staticPathsFor) => staticPathsFor({}));
const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Resume);
export { getStaticPaths, getStaticProps };
