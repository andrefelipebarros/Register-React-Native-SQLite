import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {WelcomeScreen} from './components/WelcomeScreen';
import type { IWelcomeUserData } from './interfaces/userData';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome: IWelcomeUserData
};


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
