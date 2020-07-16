import { enUS } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'view in english',
  date: {
    locale: enUS,
    current: 'present',
  },
  pages: {
    resume: {
      experiences: 'Profissional Experiences',
      formation: 'Academic Formation',
      skills: 'Skills',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Interested',
        notInterested: 'Not interested',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
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
