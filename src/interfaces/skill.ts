type Tag =
  | 'interested'
  | 'notInterested'
  | 'beginner'
  | 'intermediary'
  | 'advanced'
  | 'forfun'
  | 'professionalExperience';

export default interface Skill {
  name: string;
  tags: Tag[];
}
