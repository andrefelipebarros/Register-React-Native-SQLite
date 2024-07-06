import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { RootStackParamList } from '..';
import type { RouteProp } from '@react-navigation/native';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  route: RouteProp<RootStackParamList, 'Welcome'>;
  navigation: WelcomeScreenNavigationProp;
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
});

const WelcomeScreen = ({ route, navigation }: Props) => {
  const { username, email, cpf } = route.params;

  return (
    <View>
      <Text>Seja bem-vindo, {username}!</Text>
      <Text><Text style={styles.bold}>EMAIL:</Text> {email}</Text>
      <Text><Text style={styles.bold}>CPF:</Text> {cpf}</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export { WelcomeScreen };
