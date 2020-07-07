import React from 'react';

import Layout from '../../components/Layout';
import { I18nProvider } from '../../i18n';
import CMSContent from '../../interfaces';
import Language from '../../interfaces/language';
import { CMSProvider } from '../content';

interface LayoutProps {
  layout: {
    content: CMSContent;
    currentLanguage: string;
    currentLanguagePath: string;
    languages: Language[];
  };
}

export default function LayoutHOC(Component: React.FC) {
  function ProjectedComponent({ layout: { content, languages } }: LayoutProps) {
    return (
      <I18nProvider language={content.language.code}>
        <CMSProvider content={content}>
          <Layout siteName={content.profile.siteName} currentLanguage={content.language.code} languages={languages}>
            <Component />
          </Layout>
        </CMSProvider>
      </I18nProvider>
    );
  }
  ProjectedComponent.displayName = `LayoutHOC.${Component.displayName}`;

  return ProjectedComponent;
}
