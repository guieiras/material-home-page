import { ptBR } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  date: {
    locale: ptBR,
    current: 'atual',
  },
  pages: {
    resume: {
      title: 'Currículo',
      experiences: 'Experiências Profissionais',
      formation: 'Formação Acadêmica',
      skills: 'Habilidades',
    },
  },
  components: {
    navbar: {
      portfolio: 'Projetos',
      blog: 'Blog',
    },
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
  },
};

export default texts;
