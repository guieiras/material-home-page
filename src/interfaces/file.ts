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
