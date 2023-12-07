import React, { useEffect } from "react"
import { ConnectButton, ConnectDialog } from "@connect2ic/react"
import logo from "../assets/ICPTutto.svg"
import { useAuthStore } from "../store/auth.store"

const Navbar = () => {

    const { userInfo, setUserInfo } = useAuthStore();

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <div className="w-full h-20 flex flex-col justify-center border-b border-b-gray-200 dark:bg-zinc-950 dark:text-white dark:border-0">
            <div className="flex items-center justify-between px-20">
                <div className="flex flex-row gap-5 items-center">
                    <div className="w-max cursor-pointer" onClick={() => router.push('/')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="w-100 flex flex-row gap-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">DAO</a></li>
                    </ul>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <span>{userInfo?.name}</span>
                    <ConnectButton onDisconnect={() => setUserInfo(null)}/>
                </div>
            </div>
            <ConnectDialog />
        </div>
    )
}

export default Navbar;