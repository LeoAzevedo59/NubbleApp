import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottom = Pick<Post, 'text' | 'author' | 'commentCount'>;

export function PostBottom({text, author, commentCount}: PostBottom) {
  function expandComments() {}
  const commentText = getCommentText(commentCount);
  return (
    <Box marginTop="s16">
      <Text bold>{author.userName}</Text>
      <Text marginBottom="s8" color="gray1">
        {text}
      </Text>
      {commentCount > 0 && (
        <Pressable onPress={expandComments}>
          <Text preset="paragraphSmall" bold color="primary">
            {commentText}
          </Text>
        </Pressable>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
