import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {AppTabNavigator, AppTabNavigatorParamList} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabNavigatorParamList>;
  SettingsScreen: undefined;
};

export function AppStack() {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen
        key={4}
        name="AppTabNavigator"
        component={AppTabNavigator}
      />
      <Stack.Screen key={5} name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
