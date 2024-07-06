import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { registerUser } from '../database/userQueries';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../index';
import { MaskedTextInput } from 'react-native-mask-text';
import { isValidEmail } from '../validators/isValidEmail';
import { isValidCpf } from '../validators/isValidCpf';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfRaw, setCpfRaw] = useState('');
  const database = useSQLiteContext();

  const cpfMask = "999.999.999-99";

  const handleRegister = async () => {
    if (!isValidEmail(email))
      return Alert.alert("Email inválido", "O email passado é inválido, verifique e tente novamente.");

    if (!isValidCpf(cpf))
      return Alert.alert("CPF inválido", "O CPF passado é inválido, verifique e tente novamente.");

    const success = await registerUser(database, { username, password, email, cpf: cpfRaw });

    if (success) {
      navigation.navigate("Login");
    } else {
      Alert.alert("Não foi possível registrar", "Um usuário com esse nome já se encontra registrado no sistema.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registro</Text>
      <View style={{ marginBottom: 20 }} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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
      <MaskedTextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={(formatted, raw) => {
          setCpf(formatted);
          setCpfRaw(raw);
        }}
        mask={cpfMask}
        keyboardType='numeric'
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
