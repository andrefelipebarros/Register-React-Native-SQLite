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
  const { email } = route.params;

  return (
    <View>
      <Text>Seja bem-vindo(a)!</Text>
      <Text><Text style={styles.bold}>EMAIL:</Text> {email}</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export { WelcomeScreen };
