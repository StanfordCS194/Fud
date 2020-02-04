import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import { GoalsScreen } from './Views/goals_view'
import { HomeScreen } from './Views/home_view'
import { PreferencesScreen } from './Views/preferences_view'
import { AuthLoadingScreen, SignInScreen } from './Views/profile_view'
import { DetailScreen } from './Views/progress_view'

// Adapted from https://snack.expo.io/@react-navigation/auth-flow-v3

const AppStack = createStackNavigator(
  { 
    Home: HomeScreen, 
    Detail: DetailScreen, 
  },
  {
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
      },
    },
  }
);

const AuthStack = createStackNavigator(
  { 
    SignIn: SignInScreen,
  },
  {
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
      },
    },
  }
);

const PreferencesStack = createStackNavigator(
  {
    Goals: GoalsScreen,
    Preferences: PreferencesScreen,
  },
  {
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: '#FFFFFF' },
      headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
      },
    },
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Prefs: PreferencesStack,
    },
    {
      initialRouteName: 'AuthLoading',
      defaultNavigationOptions: {
        cardStyle: { 
          backgroundColor: '#FFFFFF' 
        },
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
              height: 0,
          },
        },
      },
    }
  )
);