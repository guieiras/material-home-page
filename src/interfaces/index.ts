import Block from './block';
import ProfessionalExperience from './experience';
import AcademicFormation from './formation';
import HomeCard from './homeCard';
import Language from './language';
import Post from './post';
import Profile from './profile';
import Skill from './skill';

export default interface CMSContent {
  language: Language;
  profile: Profile;
  homeCards: HomeCard[];
  professional: ProfessionalExperience[];
  formation: AcademicFormation[];
  skills: Record<string, Skill[]>;
  blocks: Record<string, Block>;
  posts: Post[];
}
