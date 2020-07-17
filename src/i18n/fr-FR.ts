import { fr } from 'date-fns/locale';

import { I18nLanguage } from '.';

const texts: I18nLanguage = {
  linkToLanguage: 'voir en français',
  date: {
    locale: fr,
    current: 'présent',
  },
  pages: {
    resume: {
      experiences: 'Expériences professionnelles',
      formation: 'Eenseignement',
      skills: 'Compétences',
    },
  },
  components: {
    skill: {
      tag: {
        interested: 'Intéressé',
        notInterested: 'Pas intéressé',
        beginner: 'Novice',
        intermediate: 'Intermédiaire',
        advanced: 'Avancé',
        forfun: "Pour s'amuser",
        professionalExperience: "L'expérience professionnelle",
      },
    },
    portfolio: {
      project: 'Ouvert',
      repository: 'Afficher le code source',
    },
  },
};

export default texts;
