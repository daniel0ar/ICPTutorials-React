import { useCanister } from "@connect2ic/react"
import React, { useEffect, useState } from "react"

const Backend = () => {
    const [backend] = useCanister("backend");
    
}

export { Backend }