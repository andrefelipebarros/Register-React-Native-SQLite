import { SQLiteDatabase } from "expo-sqlite";

export async function registerUser(database: SQLiteDatabase, username: string, password: string) {
    try {
        let stmt = await database.prepareAsync(`
            INSERT INTO users (username, password) VALUES (?, ?);`
        );

        await database.withTransactionAsync(async () => {
            await stmt.executeAsync([username, password]);
        });
        return true; // Registro bem-sucedido
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return false; // Falha no registro
    }
}

export async function loginUser(database: SQLiteDatabase, username: string, password: string) {
    try {
        let stmt = await database.prepareAsync(`
            SELECT * FROM users
            WHERE username = ? AND password = ?;`
        );

        const result = await database.withTransactionAsync(async () => {
            await stmt.executeAsync([username, password]); 
        });

        
        console.log('Resultado da consulta:', result);

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false; 
    }
}
