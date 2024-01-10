import React from 'react';
import {Pressable} from 'react-native';

import {
  ArrowLeftIcon,
  MessageRoundIcon,
  CheckRoundIcon,
  EyeOffIcon,
  EyeOnIcon,
  BookMarkFillIcon,
  BookMarkIcon,
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
  NewPostIcon,
  ProfileFillIcon,
  ProfileIcon,
} from '@assets';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

export interface IconBaseProps {
  color?: string;
  size?: number;
}

export interface IconProps extends IconBaseProps {
  name: IconsName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 20,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  arrowLeft: ArrowLeftIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
  bookMarkFill: BookMarkFillIcon,
  bookMark: BookMarkIcon,
  heartFillIcon: HeartFillIcon,
  heartIcon: HeartIcon,
  homeFillIcon: HomeFillIcon,
  homeIcon: HomeIcon,
  newPostIcon: NewPostIcon,
  profileFillIcon: ProfileFillIcon,
  profileIcon: ProfileIcon,
};

export type IconType = typeof iconRegistry;
export type IconsName = keyof IconType;
