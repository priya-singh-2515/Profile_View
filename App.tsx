import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Notification from './src/screens/Notification';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ProfileStack"
        screenOptions={{
          tabBarActiveTintColor: 'lightblue',
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
          },
        }}
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="NotificationStack"
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <MIcon name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <MIcon name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <MIcon
                name="dots-horizontal-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
