import { enUS } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  date: {
    locale: enUS,
    current: 'present',
  },
  pages: {
    resume: {
      title: 'Resume',
      experiences: 'Profissional Experiences',
      formation: 'Academic Formation',
    },
  },
  components: {
    navbar: {
      portfolio: 'Projects',
      blog: 'Blog',
    },
  },
};

export default texts;
