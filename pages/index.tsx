import Head from 'next/head';
import React from 'react';

import Layout from '../src/components/Layout';
import { HomeResponse } from '../src/serializers/contentful';
import DataFetcher from '../src/services/fetcher';

export default function Index({ content }: { content: HomeResponse }): JSX.Element {
  return (
    <Layout siteName={content.profile.name}>
      <Head>
        <title>{content.profile.name}</title>
      </Head>
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
