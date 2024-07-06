import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { registerUser } from '../utils/auth-utils';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../index';
import { isValidEmail } from '../validators/isValidEmail';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    if (!isValidEmail(email))
      return Alert.alert("Email inválido", "O email passado é inválido, verifique e tente novamente.");

    const success = await registerUser({ email, nome: name, password });

    if (success) {
      navigation.navigate("Login");
    } else {
      Alert.alert("Não foi possível registrar", "Um usuário com esse nome já se encontra registrado no sistema.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registro</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize='none'
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize='none'
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Registrar" onPress={handleRegister} />

      <View style={{ marginBottom: 40 }} />

      <Text>Possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={{ color: "blue", fontSize: 12 }}>Faça login aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export { RegisterScreen };
