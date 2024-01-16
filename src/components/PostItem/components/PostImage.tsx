import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

type PostImageImage = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: PostImageImage) {
  const $style = {width: Dimensions.get('screen').width, height: 300};
  return <Image source={{uri: imageURL}} resizeMode="cover" style={$style} />;
}
