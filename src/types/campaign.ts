export interface template {
  temp: string;
  id: number;
  nextId: number;
  color?: string;
  who?: string;
  text?: string;
  hidden?: boolean;
  isLast?: boolean;
  number?: string;
  question?: string;
  answer?: string[];
  backgroundImg: string;
}

export interface story {
  temp: string;
  id: number;
  nextId: number;
  color: string;
  who: string;
  text: string;
  hidden: boolean;
  isLast: boolean;
}

export interface question {
  temp: string;
  id: number;
  nextId: number;
  number: string;
  question: string;
  answer: string[];
}

export interface statistics {
  code: string;
  env: string | undefined;
}

// interface RootObject {
//   isSuccess: boolean;
//   code: number;
//   message: string;
//   result: Result[];
// }
