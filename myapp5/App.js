import React from 'react';
import AppContainer from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
    <AppContainer />
    </NavigationContainer>
  )
  
}