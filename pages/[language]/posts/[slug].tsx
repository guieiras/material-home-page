import { ParsedUrlQuery } from 'querystring';

import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../../src/cms';
import LayoutHOC from '../../../src/components/Layout/HOC';
import CMSContent from '../../../src/interfaces';
import Post from '../../../src/interfaces/post';
import { BlogPost } from '../../posts/[slug]';

const getStaticProps = fetchDataToStaticProps(async (content: CMSContent, params: ParsedUrlQuery) => ({
  post: content.posts.filter((post) => post.slug === params.slug)[0],
}));
const getStaticPaths = fetchDataToStaticPaths((content) => ({
  paths: content
    .filter((node) => !node.language.default)
    .reduce(
      (memo, node) => [
        ...memo,
        ...node.posts.map((post) => ({ params: { slug: post.slug, language: node.language.code } })),
      ],
      [],
    ),
  fallback: false,
}));

export default LayoutHOC(BlogPost, (props) => ({ path: `posts/${(props.post as Post).slug}` }));
export { getStaticProps, getStaticPaths };
