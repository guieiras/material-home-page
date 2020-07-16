export default interface Page {
  slug: string;
  title: string;
  description: string;
  content: Record<string, unknown>;
}
