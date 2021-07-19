import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Coming Soon"
        component={HomeStack}
        options={{
          tabBarLabel: 'Coming Soon',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="video-library" color={color} size={24} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={HomeStack}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="download" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
