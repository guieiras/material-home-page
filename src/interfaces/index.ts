import Block from './block';
import ProfessionalExperience from './experience';
import AcademicFormation from './formation';
import HomeCard from './homeCard';
import Language from './language';
import Portfolio from './portfolio';
import Post from './post';
import Profile from './profile';
import SkillGroup from './skillGroup';

export default interface CMSContent {
  language: Language;
  profile: Profile;
  homeCards: HomeCard[];
  professional: ProfessionalExperience[];
  formation: AcademicFormation[];
  skills: SkillGroup[];
  blocks: Record<string, Block>;
  portfolio: Portfolio[];
  posts: Post[];
}
