import type { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            PRIMARY KEY("id" AUTOINCREMENT)
        );
    `);
}