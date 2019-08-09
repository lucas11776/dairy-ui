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

export interface Response {
  stutas: boolean;
  data: {
    message: string;
    name: string;
    title: string;
    emotion: string;
    text: string;
  }
}