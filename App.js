
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen'
import GridScreen from './src/screens/GridScreen';
import TableScreen from './src/screens/TableScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Grid" component={GridScreen} />
        <Stack.Screen name="Table" component={TableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

