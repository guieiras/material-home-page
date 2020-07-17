import { it } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'vedi in italiano',
  date: {
    locale: it,
    current: 'ad oggi',
  },
  pages: {
    resume: {
      experiences: 'Esperienza professionale',
      formation: 'Istruzione e formazione',
      skills: 'Competenze personali',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Interessato',
        notInterested: 'Non interessato',
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzato',
        forfun: 'Divertimento',
        professionalExperience: 'Esperienza lavorativa',
      },
    },
    portfolio: {
      project: 'Aprire',
      repository: 'Visualizza il codice sorgente',
    },
  },
};

export default texts;
