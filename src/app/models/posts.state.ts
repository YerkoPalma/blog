import { Post } from './post';
import { Draft } from './draft';

export interface AppState {
  loading: boolean;
  postsLoaded: boolean;
  draftsLoaded: boolean;
  posts: Post[];
  drafts: Draft[];
  page: string;
}
