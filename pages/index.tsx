import Head from 'next/head';
import React from 'react';

import Layout from '../src/components/Layout';
import { I18nProvider } from '../src/i18n';
import { HomeResponse } from '../src/serializers/contentful';
import DataFetcher from '../src/services/fetcher';

export default function Index({ content }: { content: HomeResponse }): JSX.Element {
  return (
    <I18nProvider language={content.language.code}>
      <Layout siteName={content.profile.name}>
        <Head>
          <title>{content.profile.name}</title>
        </Head>
      </Layout>
    </I18nProvider>
  );
}

export async function getStaticProps() {
  const content = await DataFetcher();

  return {
    props: {
      content: content.filter((node) => node.language.default)[0],
    },
  };
}
