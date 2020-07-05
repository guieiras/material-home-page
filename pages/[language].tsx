import { HomeResponse } from '../src/serializers/contentful';
import DataFetcher from '../src/services/fetcher';

import Index from '.';

export default function LanguageHome({ content }: { content: HomeResponse }): JSX.Element {
  return Index({ content });
}

interface PageParams {
  params: {
    language?: string;
  };
}

export async function getStaticPaths() {
  const content = await DataFetcher();

  return {
    paths: content.reduce(
      (memo, { language }) => [...memo, ...(language.default ? [] : [{ params: { language: language.code } }])],
      [],
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params: { language } }: PageParams) {
  const content = await DataFetcher();

  return {
    props: {
      content: content.filter((node) => node.language.code === language)[0],
    },
  };
}
