import React from "react"
import { useCanister } from "@connect2ic/react"
import { useConnect } from "@connect2ic/react";

const Home = () => {
    const { principal } = useConnect();

    const [backend] = useCanister("backend");
    return (
        <div className="flex flex-col h-[70vh] items-center mt-[100px]">
            <h1 className="text-3xl font-bold underline">Home Page</h1>
            <p> My ID is: {principal}</p>
        </div>
    )
}

export { Home }