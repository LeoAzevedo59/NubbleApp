import {IconProps} from '@components';

import {AppTabNavigatorParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabNavigatorParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFillIcon',
      unfocused: 'homeIcon',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPostIcon',
      unfocused: 'newPostIcon',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'heartFillIcon',
      unfocused: 'heartIcon',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFillIcon',
      unfocused: 'profileIcon',
    },
  },
};
