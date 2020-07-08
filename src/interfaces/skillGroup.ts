import Skill from './skill';

export default interface SkillGroup {
  name: string;
  order: number;
  skills: Skill[];
}
