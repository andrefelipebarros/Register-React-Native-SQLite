import {  Slot  } from "expo-router"
import { SQLiteProvider } from "expo-sqlite"

import { initializeDatabase } from "./database/initializeDatabase"
import { Suspense } from "react"

export default function Layout(){
    return (
        <Suspense>
            <SQLiteProvider databaseName="sqlite.db" onInit={initializeDatabase} useSuspense>
                <Slot />
            </SQLiteProvider>
        </Suspense>
    )
}