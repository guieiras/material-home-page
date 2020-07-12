export default function pathBuilder(...paths: string[]): string {
  return paths.reduce((memo, path) => (path ? `${memo}/${path}` : memo), '');
}
