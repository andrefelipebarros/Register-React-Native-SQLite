import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { registerUser } from '../database/userQueries';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../index';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const database = useSQLiteContext();

  const handleRegister = async () => {
    const success = await registerUser(database, username, password);

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
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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