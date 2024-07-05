import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import type { RootStackParamList } from '..';
import type { RouteProp } from '@react-navigation/native';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  route: RouteProp<RootStackParamList, 'Welcome'>;
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ route, navigation }: Props) => {
  const { username } = route.params;

  return (
    <View>
      <Text>Seja bem-vindo, {username}!</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export { WelcomeScreen };
