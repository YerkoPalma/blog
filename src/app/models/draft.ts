import { Timestamp } from './post';

export interface Draft {
  title: string;
  abstract: string;
  date: Timestamp;
  slug: string;
}
