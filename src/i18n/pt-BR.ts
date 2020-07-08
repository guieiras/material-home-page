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
    },
  },
  components: {
    navbar: {
      portfolio: 'Projetos',
      blog: 'Blog',
    },
  },
};

export default texts;
