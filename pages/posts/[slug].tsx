import { ParsedUrlQuery } from 'querystring';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

import { fetchDataToStaticProps, fetchDataToStaticPaths } from '../../src/cms';
import LayoutHOC from '../../src/components/Layout/HOC';
import Meta from '../../src/components/Layout/Meta';
import PostRichText from '../../src/components/Post/RichText';
import { useI18n } from '../../src/i18n';
import CMSContent from '../../src/interfaces';
import Post from '../../src/interfaces/post';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    marginTop: theme.spacing(1),
  },
}));

export function BlogPost({ post }: { post: Post }): JSX.Element {
  const classes = useStyles();
  const texts = useI18n();

  return (
    <article>
      <Meta title={post.title} description={post.shortContent} />
      <header className={classes.header}>
        <Typography variant="h4" component="h1">
          {post.title}
        </Typography>
        <Typography variant="caption" className={classes.subtitle}>
          {format(parseISO(post.createdAt), 'PPPP', { locale: texts.date.locale })}
        </Typography>
      </header>
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
