import { ptBR } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  date: {
    locale: ptBR,
    current: 'atual',
  },
  pages: {
    resume: {
      experiences: 'Experiências Profissionais',
    },
  },
  components: {
    navbar: {
      resume: 'Currículo',
      portfolio: 'Projetos',
      blog: 'Blog',
    },
  },
};

export default texts;
