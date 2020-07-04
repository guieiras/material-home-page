import { promises } from 'fs';

import ContentfulSerializer, { HomeResponse } from '../serializers/contentful';

import ContentfulService from './contentful';

export enum DataStrategy {
  LocalFirst,
  RemoteFirst,
  LocalOnly,
  RemoteOnly,
}

const LOCAL_FOLDER = '.cache';
const LOCAL_FILE = `${LOCAL_FOLDER}/.contentful.json`;

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
  return ContentfulSerializer(content);
}

async function localFetch(): Promise<HomeResponse[]> {
  const fileBuffer = await promises.readFile(LOCAL_FILE);
  const json = fileBuffer.toString();
  return JSON.parse(json);
}

async function cacheContent(content: HomeResponse[]): Promise<HomeResponse[]> {
  await promises.mkdir(LOCAL_FOLDER, { recursive: true });
  await promises.writeFile(LOCAL_FILE, JSON.stringify(content));

  return content;
}
