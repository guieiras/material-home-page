import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Layout from '../src/components/Layout';
import Link from '../src/components/Link';
import { HomeResponse } from '../src/serializers/contentful';
import DataFetcher from '../src/services/fetcher';

export default function Index({ content }: { content: HomeResponse }): JSX.Element {
  return (
    <Layout>
      <Box my={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          {content.profile.name}
        </Typography>
        <Link href="/" color="secondary">
          Link to Home
        </Link>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await DataFetcher();

  return {
    props: {
      content: content.filter((node) => node.language === '')[0],
    },
  };
}
