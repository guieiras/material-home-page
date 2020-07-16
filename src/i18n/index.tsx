import React from 'react';

import enUS from './en-US';
import ptBR from './pt-BR';

export function getTexts(language: string): I18nLanguage {
  return {
    'en-US': enUS,
    'pt-BR': ptBR,
  }[language];
}

export interface I18nLanguage {
  linkToLanguage: string;
  date: {
    locale: Record<string, unknown>;
    current: string;
  };
  pages: {
    resume: {
      experiences: string;
      formation: string;
      skills: string;
    };
  };
  components: {
    skill: {
      tag: {
        interested: string;
        notInterested: string;
        beginner: string;
        intermediary: string;
        advanced: string;
        forfun: string;
        professionalExperience: string;
      };
    };
    portfolio: {
      project: string;
      repository: string;
    };
  };
}

const I18nContext = React.createContext<I18nLanguage>(null);
function useI18n() {
  return React.useContext(I18nContext);
}

interface ProviderProps {
  language: string;
  children: React.ReactNode;
}

function I18nProvider({ language, children }: ProviderProps): JSX.Element {
  return <I18nContext.Provider value={getTexts(language)}>{children}</I18nContext.Provider>;
}

export { I18nProvider, useI18n };
