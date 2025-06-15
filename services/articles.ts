import { type BlocksContent } from "@strapi/blocks-react-renderer";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ResponseList<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface ResponseSingle<T> {
  data: T;
  meta: object;
}

export type Article = {
  id: number;
  documentId: string;
  Title: string;
  Content: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Cover: {
    url: string;
  };
};

type ResponseListArticles = ResponseList<Article>;
type ResponseSingleArticle = ResponseSingle<Article>;

const Articles = {
  async list() {
    const response = await fetch(`${BASE_URL}/api/articles?populate=*`);

    const data = await response.json();
    return data as ResponseListArticles;
  },

  async retrieve(documentId: string) {
    const response = await fetch(
      `${BASE_URL}/api/articles/${documentId}?populate=*`
    );

    const data = await response.json();
    return data as ResponseSingleArticle;
  },
};

export default Articles;
