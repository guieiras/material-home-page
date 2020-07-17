import { de } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'siehe auf deutsch',
  date: {
    locale: de,
    current: 'heute',
  },
  pages: {
    resume: {
      experiences: 'Berufserfahrung',
      formation: 'Ausbildung',
      skills: 'Kenntnisse und Fähigkeiten',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Interessiert',
        notInterested: 'Desinteressiert',
        beginner: 'Einsteiger',
        intermediate: 'Fortgeschrittene',
        advanced: 'Profis',
        forfun: 'Amüsement',
        professionalExperience: 'Berufserfahrung',
      },
    },
    portfolio: {
      project: 'Öffnen',
      repository: 'Quellcode anzeigen',
    },
  },
};

export default texts;
