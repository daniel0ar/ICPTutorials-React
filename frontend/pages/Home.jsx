import React from "react"
import { useCanister } from "@connect2ic/react"
import { useConnect } from "@connect2ic/react";

const Home = () => {
    const { principal } = useConnect();

    const [backend] = useCanister("backend");
    return (
        <div>
            <h1>Home Page</h1>
            <p> My ID is: {principal}</p>
        </div>
    )
}

export { Home }