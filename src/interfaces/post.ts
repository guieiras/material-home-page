export default interface Post {
  title: string;
  author: string;
  slug: string;
  shortContent: string;
  content: Record<string, unknown>;
  createdAt: string;
}
