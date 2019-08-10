export interface Article {
  name: string;
  title: string;
  text: string;
}

export interface Dairy {
  id: number;
  date: string;
  name: string;
  title: string;
  text: string;
}

export interface DairyResponse {
  total: number;
  articles: Array<Dairy>;
}

export interface Update {
  id: number;
  title: string;
  text: string;
}

export interface CreateResponse {
  status: boolean;
  message: string;
  data: Article;
}

export interface DeleteResponse {
  status: boolean;
  message: string;
}

export interface UpdateResponse {
  status: boolean;
  message: string;
  data: Article;
}
