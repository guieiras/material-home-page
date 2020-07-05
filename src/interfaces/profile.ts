export default interface Profile {
  name: string;
  title: string;
  siteName: string;
  bio: Record<string, unknown>;
  social: {
    email?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
