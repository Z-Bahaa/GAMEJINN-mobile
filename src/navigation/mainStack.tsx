import React from 'react';
import {useTheme,} from 'native-base';

import { mainStack } from './navigator';

import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookingTabs from '../screens/Booking'

import Discover from '../screens/Discover'
import Search from '../screens/Search'
import Coaches from '../screens/Coaches'
import Games from '../screens/Games'
import CoachProfile from '../screens/CoachProfile'


const Stack = createStackNavigator();

function MainStack() {

  const {colors} = useTheme()

  
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.brandPrimary,
    },
  }


  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={mainStack.booking_tabs}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.booking_tabs}
          component={BookingTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.discover}
          component={Discover}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.search}
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.coaches}
          component={Coaches}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.games}
          component={Games}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={mainStack.coach_profile}
          component={CoachProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
