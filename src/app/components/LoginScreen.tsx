import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { loginUser } from '../utils/auth-utils';
import type { RootStackParamList } from '..';
import { isValidEmail } from '../validators/isValidEmail';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!isValidEmail(email))
      return Alert.alert("Email inválido", "O email passado é inválido, verifique e tente novamente.");

    const result = await loginUser(email, senha);

    if (result === true) {
      navigation.navigate("Welcome", { email });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <View style={{ marginBottom: 20 }} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        autoCapitalize='none'
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Login" onPress={handleLogin} />

      <View style={{ marginBottom: 40 }} />

      <Text>Não tem uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={{ color: "blue", fontSize: 12 }}>Registre-se aqui</Text>
      </TouchableOpacity>
    </View>
  );
};


export { LoginScreen };
