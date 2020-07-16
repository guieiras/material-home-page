import React from 'react';

import Layout from '../../components/Layout';
import { I18nProvider } from '../../i18n';
import CMSContent from '../../interfaces';
import Language from '../../interfaces/language';
import { CMSProvider } from '../content';

interface LayoutProps extends Record<string, unknown> {
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
type HOCOptionsFunction = (params: Record<string, unknown>) => HOCOptions;
interface ComponentProps extends Record<string, unknown> {
  currentLanguagePath?: string;
}
export default function LayoutHOC(Component: React.FC<ComponentProps>, options: HOCOptions | HOCOptionsFunction = {}) {
  function ProjectedComponent(params: LayoutProps) {
    const {
      layout: { content, currentLanguagePath, languages },
    } = params;
    const currentPath = (typeof options === 'function' ? options(params) : options).path;
    return (
      <I18nProvider language={content.language.code}>
        <CMSProvider content={content}>
          <Layout
            siteName={content.settings.siteName}
            currentLanguage={content.language.code}
            currentLanguagePath={currentLanguagePath}
            languages={languages}
            currentPath={currentPath}
          >
            <Component currentLanguagePath={currentLanguagePath} {...params} />
          </Layout>
        </CMSProvider>
      </I18nProvider>
    );
  }
  ProjectedComponent.displayName = `LayoutHOC.${Component.displayName}`;

  return ProjectedComponent;
}
