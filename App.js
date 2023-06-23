import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {Text} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <Text>안녕</Text>
    </NavigationContainer>
  );
}

export default App;
