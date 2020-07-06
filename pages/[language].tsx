import Language from '../src/interfaces/language';
import { HomeResponse } from '../src/serializers/contentful';
import DataFetcher from '../src/services/fetcher';

import Index from '.';

interface PageProps {
  content: HomeResponse;
  languages: Language[];
}

export default function LanguageHome({ content, languages }: PageProps): JSX.Element {
  return Index({ content, languages });
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
      languages: content.reduce((memo, node) => [...memo, node.language], []),
    },
  };
}
