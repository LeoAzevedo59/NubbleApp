import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPosts(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList
        data={posts}
        keyExtractor={post => post.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
