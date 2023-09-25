// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PetrolIstasyonlariGetirDetailsScreen from "./screens/PetrolIstasyonlariGetirDetailsScreen"
import HastaneGetirDetailsScreen from "./screens/HastaneGetirDetailsScreen"

import { endpoints } from './endpoints';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} initialParams={{ endpoints }} />
      <Stack.Screen name="PetrolIstasyonlariGetirDetails" component={PetrolIstasyonlariGetirDetailsScreen} />
      <Stack.Screen name="HastaneGetirDetails" component={HastaneGetirDetailsScreen} />

        {/* Create similar screens for other endpoints */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
