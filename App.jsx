
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/tabNavigation';
import { Provider } from 'react-redux';
import store from './src/store/store';
import RootNavigation from './src/navigation/rootNavigation';

const App = () => {
  return ( 
    
      <Provider store={store}>
        <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    
      </Provider>
  );
};

export default App;
