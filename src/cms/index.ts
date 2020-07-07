import { GetStaticPropsContext } from 'next';

import CMSContent from '../interfaces';
import DataFetcher from '../services/fetcher';

type GetPropsFunction = (content?: CMSContent) => Promise<Record<string, unknown>>;

export function fetchDataToStaticProps(fn?: GetPropsFunction) {
  return async function getStaticProps({ params }: GetStaticPropsContext) {
    const language = params?.language;
    const fullContent = await DataFetcher();
    const languages = fullContent.map((node) => node.language);
    const currentLanguage = (language && (language as string)) || languages.filter((lang) => lang.default)[0].code;
    const currentLanguagePath = language || '';
    const content = fullContent.filter((node) => node.language.code === currentLanguage)[0];

    const customProps = await (fn ? fn(content) : Promise.resolve({}));

    return {
      props: {
        ...customProps,
        layout: {
          content,
          currentLanguage,
          currentLanguagePath,
          languages,
        },
      },
    };
  };
}
