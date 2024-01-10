import {postApi} from './postApi';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  return await postApi.getList();
}

export const postService = {
  getList,
};
