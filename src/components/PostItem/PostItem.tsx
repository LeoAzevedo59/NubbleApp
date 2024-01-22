import React from 'react';

import {Post} from '@domain';

import {Box} from '../Box/Box';

import {PostAction} from './components/PostAction';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostAction
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        text={post.text}
        author={post.author}
        commentCount={post.commentCount}
      />
    </Box>
  );
}
