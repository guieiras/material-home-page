import { createClient } from 'contentful';

export interface ClientOptions {
  space?: string;
  accessToken?: string;
  host?: string;
}

export interface ContentfulLink {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentfulEntries {
  locale: {
    code: string;
    default: boolean;
  };
  content: {
    items: {
      sys: {
        id: string;
        contentType: { sys: ContentfulLink };
        createdAt: string;
        updatedAt: string;
      };
      fields: Record<string, unknown>;
    }[];
  };
}

export default class ContentfulService {
  private client;

  constructor(clientOptions: ClientOptions) {
    this.client = createClient({
      space: clientOptions.space,
      accessToken: clientOptions.accessToken,
      host: clientOptions.host,
    });
  }

  async getContent(): Promise<ContentfulEntries[]> {
    const locales = await this.client.getLocales();
    return await Promise.all(
      locales.items.map((item) =>
        this.client.getEntries({ locale: item.code }).then((content) => ({
          locale: {
            code: item.code,
            default: item.default,
          },
          content,
        })),
      ),
    );
  }
}
