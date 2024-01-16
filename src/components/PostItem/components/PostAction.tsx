import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconsName, Text, TouchableOpacityBox} from '@components';

type PostActionProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostAction({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionProps) {
  function likePost() {}
  function navigateToComment() {}
  function favoritePost() {}

  return (
    <Box flexDirection="row">
      <Item
        onPress={likePost}
        icon={{default: 'arrowLeft', marked: 'arrowLeft'}}
        value={favoriteCount}
        marked
      />
      <Item
        onPress={navigateToComment}
        icon={{default: 'arrowLeft', marked: 'arrowLeft'}}
        value={commentCount}
      />
      <Item
        onPress={favoritePost}
        icon={{default: 'arrowLeft', marked: 'arrowLeft'}}
        value={reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconsName;
    marked: IconsName;
  };
  value: number;
  marked?: boolean;
}

function Item({onPress, icon, value, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      hitSlop={12}
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      marginTop="s16"
      marginRight="s24">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      <Text preset="paragraphSmall" bold marginLeft="s4">
        {value}
      </Text>
    </TouchableOpacityBox>
  );
}
