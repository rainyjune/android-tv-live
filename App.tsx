/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import PlayerScreen from './src/PlayerScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
        /*
        screenOptions={{
          headerShown: false
        }}
        */
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '电视直播盒子'}}
        />
        <Stack.Screen options={{headerShown: false}} name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
