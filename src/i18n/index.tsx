import React from 'react';

import enUS from './en-US';
import ptBR from './pt-BR';

function getTexts(language: string): I18nLanguage {
  return {
    'en-US': enUS,
    'pt-BR': ptBR,
  }[language];
}

export interface I18nLanguage {
  date: {
    locale: Record<string, unknown>;
    current: string;
  };
  pages: {
    resume: {
      experiences: string;
    };
  };
  components: {
    navbar: {
      resume: string;
      portfolio: string;
      blog: string;
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
