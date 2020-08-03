
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen'
import GridScreen from './src/screens/GridScreen';
import TableScreen from './src/screens/TableScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen} />
        <Stack.Screen
          name="2vars"
          component={GridScreen}
          options={{
            title: '2 Variables',
          }} />
        <Stack.Screen
          name="3vars"
          component={GridScreen}
          options={{
            title: '3 Variables',
          }} />
        <Stack.Screen
          name="4vars"
          component={GridScreen}
          options={{
            title: '4 Variables',
          }} />
        <Stack.Screen
          name="5vars"
          component={GridScreen}
          options={{
            title: '5 Variables',
          }} />
        <Stack.Screen
          name="6vars"
          component={GridScreen}
          options={{
            title: '6 Variables',
          }} />
        <Stack.Screen
          name="Table"
          component={TableScreen} />
        <Stack.Screen
          name="Result"
          options={{
            title: 'Resultado',
          }}
          component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

