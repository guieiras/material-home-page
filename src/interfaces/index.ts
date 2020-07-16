import ProfessionalExperience from './experience';
import AcademicFormation from './formation';
import HomeCard from './homeCard';
import Language from './language';
import Page from './page';
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
  pages: Record<string, Page>;
  portfolio: Portfolio[];
  posts: Post[];
  settings: Record<string, string>;
}
