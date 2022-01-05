import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import ContentfulRichText from '../src/components/ContentfulRichText';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';
import { useI18n } from '../src/i18n';
import pathBuilder from '../src/util/pathBuilder';

export function Blog({ currentLanguagePath }: { currentLanguagePath: string }): JSX.Element {
  const texts = useI18n();
  const content = useCMS();

  return (
    <>
      <Meta
        title={`${content.pages.blog.title} - ${content.profile.name}`}
        description={content.pages.blog.description}
      />
      <Typography variant="h3" component="h1" sx={{ mt: 3, mb: 2 }}>
        {content.pages.blog.title}
      </Typography>
      {ContentfulRichText(content.pages.blog.content)}
      <List sx={{ mt: 1 }}>
        {content.posts.map((post) => (
          <ListItem
            disableGutters
            key={post.slug}
            sx={{ mt: 2 }}
            style={{ alignItems: 'flex-start', flexDirection: 'column' }}
          >
            <Typography
              component="a"
              color="primary"
              variant="h6"
              href={pathBuilder(currentLanguagePath, 'posts', post.slug)}
            >
              {post.title}
            </Typography>
            <Typography variant="caption">
              {format(parseISO(post.createdAt), 'PPPP', { locale: texts.date.locale })}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              {post.shortContent}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Blog, { path: 'blog' });
export { getStaticProps };
