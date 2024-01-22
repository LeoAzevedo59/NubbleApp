import React from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {Post} from '@domain';

type PostImageImage = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: PostImageImage) {
  const $style: StyleProp<ImageStyle> = {
    width: Dimensions.get('screen').width,
    height: 300,
    marginHorizontal: -24,
  };
  return <Image source={{uri: imageURL}} resizeMode="cover" style={$style} />;
}
