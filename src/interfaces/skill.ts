type Tag =
  | 'interested'
  | 'notInterested'
  | 'beginner'
  | 'intermediary'
  | 'advanced'
  | '4fun'
  | 'professionalExperience';

export default interface Skill {
  name: string;
  tags: Tag[];
}
