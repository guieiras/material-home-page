import { compareDesc, parseISO } from 'date-fns';

import CMSContent from '../interfaces';
import Block from '../interfaces/block';
import Skill from '../interfaces/skill';
import { ContentfulEntries } from '../services/contentful';

import ContentfulProfessionalSerializer from './contentful/professional';

export interface ContentfulFile {
  sys: {
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: { width: number; height: number };
      };
      fileName: string;
      contentType: string;
    };
  };
}

const initialProfile = {
  name: '',
  title: '',
  siteName: '',
  bio: null,
  social: {
    email: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    github: null,
  },
};

const initialSkills: Record<string, Skill[]> = {};
const initialBlocks: Record<string, Block> = {};

export default function ContentfulSerializer(response: ContentfulEntries[]): CMSContent[] {
  return response.map((node) => {
    return {
      language: {
        code: node.locale.code,
        default: node.locale.default,
      },
      profile: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'cv')
        .reduce(
          (node, { fields }) => ({
            name: (fields.name as string) || node.name,
            title: (fields.title as string) || node.title,
            siteName: (fields.siteName as string) || node.siteName,
            bio: fields.bio || node.bio,
            social: {
              email: fields.email || node.social.email,
              facebook: fields.facebook || node.social.facebook,
              twitter: fields.twitter || node.social.twitter,
              linkedin: fields.linkedin || node.social.linkedin,
              github: fields.github || node.social.github,
            },
          }),
          initialProfile,
        ),
      homeCards: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'homeCards')
        .sort((a, b) => (a.fields.order as number) - (b.fields.order as number))
        .map(({ fields }) => ({
          name: fields.name as string,
          slug: fields.slug as string,
          description: fields.description as string,
        })),
      professional: ContentfulProfessionalSerializer(
        node.content.items.filter((item) => item.sys.contentType.sys.id === 'professional'),
      ),
      formation: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'academic')
        .sort((a, b) => (a.fields.startYear as number) - (b.fields.startYear as number))
        .map(({ fields }) => ({
          academy: fields.academy as string,
          academyImage: (fields.academyImage as ContentfulFile)?.fields?.file?.url,
          title: fields.title as string,
          startYear: fields.startYear as number,
          endYear: fields.endYear as number,
          description: fields.description as string,
        })),
      skills: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'skills')
        .sort(
          (a, b) =>
            (a.fields.level as number) - (b.fields.level as number) ||
            (a.fields.priority as number) - (b.fields.priority as number),
        )
        .reduce(
          (memo, { fields }) => ({
            ...memo,
            [fields.level ? fields.level.toString() : 'soft']: [
              ...(memo[fields.level && fields.level.toString()] || []),
              {
                name: fields.skill as string,
                icon: fields.icon as string,
                level: fields.level as number,
                priority: fields.priority as number,
              },
            ],
          }),
          initialSkills,
        ),
      blocks: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'block')
        .reduce(
          (memo, { fields }) => ({
            ...memo,
            [fields.identifier as string]: {
              identifier: fields.identifier as string,
              title: fields.title as string,
              content: fields.content as string,
            },
          }),
          initialBlocks,
        ),
      posts: node.content.items
        .filter((item) => item.sys.contentType.sys.id === 'post')
        .sort((a, b) => compareDesc(parseISO(a.sys.createdAt), parseISO(b.sys.createdAt)))
        .map(({ fields }) => ({
          title: fields.title as string,
          author: fields.author as string,
          slug: fields.slug as string,
          shortContent: fields.shortContent as string,
          content: fields.content as Record<string, unknown>,
        })),
    };
  });
}
