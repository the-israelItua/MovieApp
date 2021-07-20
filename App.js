import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import RootNavigation from './src/navigation/rootNavigation';
import 'react-native-gesture-handler';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
