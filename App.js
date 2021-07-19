import React from 'react';
import type {Node} from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import 'react-native-gesture-handler';

const App: () => Node = () => {
  return <RootNavigation />;
};

export default App;
