import type { IUserRegisterData } from "../interfaces/userData";
import axios from "axios";
import { Alert } from "react-native";

export async function registerUser(
    { nome, password, email }: IUserRegisterData
): Promise<boolean> {
    const data = await axios.post("https://valorantapi-ue6m.onrender.com/register", {
        nome: nome, email: email, senha: password
    });

    if (data.status === 400) {
        Alert.alert("Email cadastrado já existe.")
    } else if (data.status === 200) {
        return true;
    } else {
        Alert.alert("Ocorreu um erro interno, verifique os dados tente novamente.");
    }

    return false;
}

export async function loginUser(email: string, password: string): Promise<boolean> {
    const data = await axios.post("https://valorantapi-ue6m.onrender.com/login", {
        email: email, senha: password
    });

    if (data.status === 400) {
        Alert.alert("Dados inválidos", "Um ou mais dados passados são inválidos.")
    } else if (data.status === 200) {
        return true;
    } else {
        Alert.alert("Verifique as credenciais", "Credenciais estão inválidas, tente novamente.");
    }

    return false
}
