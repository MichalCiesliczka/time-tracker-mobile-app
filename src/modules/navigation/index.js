import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ROUTES from './routes';
import TimelineScreens from '../timeline/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routing = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName={ROUTES.Timeline.Main}>
      <Tab.Screen name={ROUTES.Timeline.Main}>
        {() => (
          <Stack.Navigator initialRouteName={ROUTES.Timeline.DayView}>
            <Stack.Screen
              name={ROUTES.Timeline.DayView}
              component={TimelineScreens.DayView}
              options={{ headerTitle: 'Day Summary' }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routing;
