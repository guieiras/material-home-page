import { Locale } from 'date-fns';
import React from 'react';

import deDE from './de-DE';
import enUS from './en-US';
import esES from './es-ES';
import frFR from './fr-FR';
import itIT from './it-IT';
import ptBR from './pt-BR';

export function getTexts(language: string): I18nLanguage {
  return {
    'de-DE': deDE,
    'en-US': enUS,
    'es-ES': esES,
    'fr-FR': frFR,
    'it-IT': itIT,
    'pt-BR': ptBR,
  }[language];
}

export interface I18nLanguage {
  linkToLanguage: string;
  date: {
    locale: Locale;
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
        intermediate: string;
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
