import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ route, navigation }: any) => {
  const { username } = route.params;

  return (
    <View>
      <Text>Seja bem-vindo, {username}!</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default WelcomeScreen;
