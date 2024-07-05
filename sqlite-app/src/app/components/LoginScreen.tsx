import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { StackNavigationProp } from '@react-navigation/stack';
import { loginUser } from '../database/userQueries';
import { RootStackParamList } from '..';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const database = useSQLiteContext();

  const handleLogin = async () => {
    const success = await loginUser(database, username, password);
    if (success) {
      console.log('Login bem-sucedido!');
      // Aqui você pode navegar para a próxima tela ou fazer outra ação
    } else {
      console.log('Credenciais inválidas.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
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
