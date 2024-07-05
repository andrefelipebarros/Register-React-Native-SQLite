import type { SQLiteDatabase } from "expo-sqlite";
import type { IUserData } from "../interfaces/userData";

export async function registerUser(database: SQLiteDatabase, username: string, password: string): Promise<boolean> {
    const stmt = await database.prepareAsync(`
        INSERT INTO users (username, password) VALUES (?, ?);`
    );

    try {
        await stmt.executeAsync([username, password]);
        await stmt.finalizeAsync();

        return true;
    } catch (err) {
        console.log("Erro ao realizar registro:", err);
        return false;
    }
}

export async function loginUser(database: SQLiteDatabase, username: string, password: string): Promise<boolean> {
    try {
        const stmt = await database.prepareAsync(`
            SELECT * FROM users
            WHERE username = ?;`
        );

        const execResult = await stmt.executeAsync([username]);
        const data = await execResult.getFirstAsync() as IUserData;
        await stmt.finalizeAsync();

        if (!data)
            return false;

        return data.password === password;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false; 
    }
}
