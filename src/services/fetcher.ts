import fs from 'fs';
import { promisify } from 'util';

import ContentfulSerializer, { HomeResponse } from '../serializers/contentful';

import ContentfulService from './contentful';

export enum DataStrategy {
  LocalFirst,
  RemoteFirst,
  LocalOnly,
  RemoteOnly,
}
const LOCAL_FILE = '.cache/.contentful.json';

export default async function DataFetcher(strategy: DataStrategy = DataStrategy.LocalFirst): Promise<HomeResponse[]> {
  if (strategy === DataStrategy.LocalFirst) {
    try {
      const content = await localFetch();
      return content;
    } catch {
      const remoteContent = await remoteFetch();
      return cacheContent(remoteContent);
    }
  }
}

async function remoteFetch(): Promise<HomeResponse[]> {
  const content = await new ContentfulService({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  }).getContent();
  console.log(content);
  return ContentfulSerializer(content);
}

async function localFetch(): Promise<HomeResponse[]> {
  const readFile = promisify(fs.readFile);
  const fileBuffer = await readFile(LOCAL_FILE);
  const json = fileBuffer.toString();
  return JSON.parse(json);
}

async function cacheContent(content: HomeResponse[]): Promise<HomeResponse[]> {
  const writeFile = promisify(fs.writeFile);
  writeFile(LOCAL_FILE, JSON.stringify(content));

  return content;
}
