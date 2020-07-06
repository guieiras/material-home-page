import Head from 'next/head';
import React from 'react';

import HomeProfile from '../src/components/Home/Profile';
import HomeProfileLinkCards from '../src/components/Home/ProfileLinkCards';
import Layout from '../src/components/Layout';
import { I18nProvider } from '../src/i18n';
import CMSContent from '../src/interfaces';
import Language from '../src/interfaces/language';
import DataFetcher from '../src/services/fetcher';

interface PageProps {
  content: CMSContent;
  languages: Language[];
}

export default function Index({ content, languages }: PageProps): JSX.Element {
  return (
    <I18nProvider language={content.language.code}>
      <Head>
        <title>{content.profile.name}</title>
      </Head>
      <Layout siteName={content.profile.siteName} currentLanguage={content.language.code} languages={languages}>
        <HomeProfile profile={content.profile} />
        <HomeProfileLinkCards cards={content.homeCards} />
      </Layout>
    </I18nProvider>
  );
}

export async function getStaticProps() {
  const content = await DataFetcher();

  return {
    props: {
      content: content.filter((node) => node.language.default)[0],
      languages: content.reduce((memo, node) => [...memo, node.language], []),
    },
  };
}
