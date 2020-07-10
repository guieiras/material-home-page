import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import ContentfulRichText from '../src/components/ContentfulRichText';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';
import { useI18n } from '../src/i18n';
import Block from '../src/interfaces/block';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  list: {
    marginTop: theme.spacing(1),
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(1),
  },
}));

export function Blog({ currentLanguagePath }: { currentLanguagePath: string }): JSX.Element {
  const classes = useStyles();
  const texts = useI18n();
  const content = useCMS();

  return (
    <>
      <Meta title={`${(content.blocks.blog as Block).title} - ${content.profile.name}`} />
      <Typography variant="h3" component="h1" className={classes.title}>
        {(content.blocks.blog as Block).title}
      </Typography>
      {ContentfulRichText((content.blocks.blog as Block).content)}
      <List className={classes.list}>
        {content.posts.map((post) => (
          <ListItem key={post.slug} disableGutters className={classes.listItem}>
            <Typography
              component="a"
              color="primary"
              variant="h6"
              href={`${currentLanguagePath && '/' + currentLanguagePath}/posts/${post.slug}`}
            >
              {post.title}
            </Typography>
            <Typography variant="caption">
              {format(parseISO(post.createdAt), 'PPPP', { locale: texts.date.locale })}
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
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
