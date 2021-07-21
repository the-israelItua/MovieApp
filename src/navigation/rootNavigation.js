import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import TabNavigation from './tabNav';
import SplashScreen from '../screens/SplashScreen';

const RootNavigation = () => {
  const {action, scifi, animation} = useSelector(state => state.movies);
  return (
    <NavigationContainer>
      {action.length === 0 || animation.length === 0 || scifi.length === 0 ? (
        <SplashScreen />
      ) : (
        <TabNavigation />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
