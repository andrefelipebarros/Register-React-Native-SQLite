import {  Slot  } from "expo-router"
import { Suspense } from "react"

export default function Layout(){
    return (
        <Suspense>
            <Slot />
        </Suspense>
    )
}