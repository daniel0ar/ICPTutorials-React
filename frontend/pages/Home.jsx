import React from "react"
import { useCanister } from "@connect2ic/react"
import { useConnect } from "@connect2ic/react";
import AuthModal from "../components/AuthModal";

const Home = () => {
    const { principal, isConnected } = useConnect();

    const [backend] = useCanister("backend");
    return (
        <div className="flex flex-col h-[85vh] items-center pt-[100px] dark:bg-neutral-800 dark:text-white">
            <h1 className="text-3xl font-bold underline">Todos los tutoriales</h1>
            <p> Hola: {principal}</p>
            { isConnected && (
                <AuthModal></AuthModal>
            )}
        </div>
    )
}

export { Home }