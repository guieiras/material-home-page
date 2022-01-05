import { ParsedUrlQuery } from 'querystring';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../src/cms';
import LayoutHOC from '../../src/components/Layout/HOC';
import Meta from '../../src/components/Layout/Meta';
import PostRichText from '../../src/components/Post/RichText';
import { useI18n } from '../../src/i18n';
import CMSContent from '../../src/interfaces';
import Post from '../../src/interfaces/post';

export function BlogPost({ post }: { post: Post }): JSX.Element {
  const texts = useI18n();

  return (
    <article>
      <Meta title={post.title} description={post.shortContent} />
      <Box component="header" sx={{ mt: 3, mb: 4 }}>
        <Typography variant="h4" component="h1">
          {post.title}
        </Typography>
        <Typography variant="caption" sx={{ mt: 1 }}>
          {format(parseISO(post.createdAt), 'PPPP', { locale: texts.date.locale })}
        </Typography>
      </Box>
      {PostRichText(post.content)}
    </article>
  );
}

const getStaticProps = fetchDataToStaticProps(async (content: CMSContent, params: ParsedUrlQuery) => ({
  post: content.posts.filter((post) => post.slug === params.slug)[0],
}));
const getStaticPaths = fetchDataToStaticPaths((content) => ({
  paths: content
    .filter((node) => node.language.default)
    .reduce((memo, node) => [...memo, ...node.posts.map((post) => ({ params: { slug: post.slug } }))], []),
  fallback: false,
}));

export default LayoutHOC(BlogPost, (props) => ({ path: `posts/${(props.post as Post).slug}` }));
export { getStaticProps, getStaticPaths };
