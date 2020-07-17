import { es } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'ver en español',
  date: {
    locale: es,
    current: 'actualidad',
  },
  pages: {
    resume: {
      experiences: 'Experiencia profesional',
      formation: 'Formación académica',
      skills: 'Habilidades',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Interesado',
        notInterested: 'Desinteresado',
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        forfun: 'Entretenimiento',
        professionalExperience: 'Experiencia de trabajo',
      },
    },
    portfolio: {
      project: 'Abrir',
      repository: 'Ver código fuente',
    },
  },
};

export default texts;
