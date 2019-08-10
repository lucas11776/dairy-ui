export interface Article {
  name: string;
  title: string;
  emotion: string;
  text: string;
}

export interface Dairy {
  id: number;
  date: string;
  name: string;
  title: string;
  emotion: string;
  text: string;
}

export interface InsertResponse {
  status: boolean;
  message: string;
  errors: Article;
}

export interface DeleteResponse {
  status: boolean;
  message: string;
}