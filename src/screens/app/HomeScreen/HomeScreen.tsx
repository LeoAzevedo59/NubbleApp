import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPosts(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 32, height: 32}}
          />
          <Text>{item.author.name}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{width: Dimensions.get('screen').width, height: 300}}
        />
      </Box>
    );
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
