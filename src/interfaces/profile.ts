export default interface Profile {
  name: string;
  title: string;
  profilePicture?: string;
  social: Record<string, string>;
}
