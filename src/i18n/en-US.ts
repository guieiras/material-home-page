import { enUS } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  date: {
    locale: enUS,
    current: 'present',
  },
  pages: {
    resume: {
      experiences: 'Profissional Experiences',
    },
  },
  components: {
    navbar: {
      resume: 'Resume',
      portfolio: 'Projects',
      blog: 'Blog',
    },
  },
};

export default texts;
