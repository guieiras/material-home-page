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
      skills: 'Skills',
    },
  },
  components: {
    navbar: {
      portfolio: 'Projects',
      blog: 'Blog',
    },
    skill: {
      tag: {
        interested: 'Interested',
        notInterested: 'Not interested',
        beginner: 'Beginner',
        intermediary: 'Intermediary',
        advanced: 'Advanced',
        forfun: '4fun',
        professionalExperience: 'Work experience',
      },
    },
    portfolio: {
      project: 'Open',
      repository: 'View source code',
    },
  },
};

export default texts;
