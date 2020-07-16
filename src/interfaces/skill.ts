type Tag =
  | 'interested'
  | 'notInterested'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'forfun'
  | 'professionalExperience';

export default interface Skill {
  name: string;
  tags: Tag[];
}
