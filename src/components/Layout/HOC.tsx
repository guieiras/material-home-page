import React from 'react';

import Layout from '../../components/Layout';
import { I18nProvider } from '../../i18n';
import CMSContent from '../../interfaces';
import Language from '../../interfaces/language';
import { CMSProvider } from '../content';

import Meta from './Meta';

interface LayoutProps {
  layout: {
    content: CMSContent;
    currentLanguage: string;
    currentLanguagePath: string;
    languages: Language[];
  };
}

interface HOCOptions {
  path?: string;
}
interface ComponentProps {
  currentLanguagePath?: string;
}
export default function LayoutHOC(Component: React.FC<ComponentProps>, options: HOCOptions = {}) {
  function ProjectedComponent({ layout: { content, currentLanguagePath, languages } }: LayoutProps) {
    const currentPath = options.path;
    return (
      <I18nProvider language={content.language.code}>
        <CMSProvider content={content}>
          <Meta title={content.profile.name} siteName={content.profile.name} />
          <Layout
            siteName={content.profile.siteName}
            currentLanguage={content.language.code}
            currentLanguagePath={currentLanguagePath}
            languages={languages}
            currentPath={currentPath}
          >
            <Component currentLanguagePath={currentLanguagePath} />
          </Layout>
        </CMSProvider>
      </I18nProvider>
    );
  }
  ProjectedComponent.displayName = `LayoutHOC.${Component.displayName}`;

  return ProjectedComponent;
}
