import { ptBR } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'ver em português do Brasil',
  date: {
    locale: ptBR,
    current: 'atual',
  },
  pages: {
    resume: {
      experiences: 'Experiências Profissionais',
      formation: 'Formação Acadêmica',
      skills: 'Habilidades',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Interessado',
        notInterested: 'Não interessado',
        beginner: 'Iniciante',
        intermediary: 'Intermediário',
        advanced: 'Avançado',
        forfun: 'Diversão',
        professionalExperience: 'Uso profissional',
      },
    },
    portfolio: {
      project: 'Acessar',
      repository: 'Ver código fonte',
    },
  },
};

export default texts;
