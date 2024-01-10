import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text} from '@components';
import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

export function AppTabNavigator() {
  const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              preset="paragraphCaption"
              semiBold
              color={focused ? 'primary' : 'backgroundContrast'}>
              Início
            </Text>
          ),
          // tabBarIcon: () =>
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
