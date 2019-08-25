export interface Post {
  title: string;
  abstract: string;
  date: Timestamp;
  slug: string;
  tags: string[];
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}
