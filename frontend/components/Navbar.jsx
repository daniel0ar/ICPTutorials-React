import React, { useEffect, useState } from "react"
import { ConnectButton, ConnectDialog } from "@connect2ic/react"
import logo from "../assets/Icptutorials-logo.png"
import { useAuthStore } from "../store/auth.store"
import { Link, useNavigate } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import ContextMenu from "./ContextMenu"

const Navbar = () => {
  const { userInfo, setUserInfo } = useAuthStore()
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)
  const navigate = useNavigate();

  const contextMenuOptions = [
    {
      name: "Acerca De",
      callBack: () => {
        setIsContextMenuVisible(false)
      },
    },
    {
      name: "Ayuda",
      callBack: () => {
        setIsContextMenuVisible(false)
      },
    },
  ]

  const authenticatedMenuOptions = [
    {
      name: "Tutoriales Pend.",
      callBack: () => {
        setIsContextMenuVisible(false)
        navigate("/incoming")
      },
    },
    {
        name: "Crear Tutorial",
        callBack: () => {
          setIsContextMenuVisible(false)
          navigate("/new")
        },
      },
    {
      name: "Ayuda",
      callBack: () => {
        setIsContextMenuVisible(false)
      },
    },
  ]

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <nav>
      <div className="w-full h-20 flex flex-col justify-center border-b border-b-gray-200 dark:bg-zinc-950 dark:text-white dark:border-0">
        <div className="flex items-center justify-between px-20">
          <div className="flex flex-row gap-5 items-center">
            <Link className="w-max cursor-pointer font-extrabold mr-3" to={"/"}>
              <img src={logo} alt="logo" className="w-10 inline"/> icp tutorials
            </Link>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/"}>DAO</Link>
          </div>
          <div className="flex flex-row items-center gap-5">
            <ConnectButton onDisconnect={() => setUserInfo(null)} />
            <div className="block">
              <div
                className="flex cursor-pointer items-center gap-2 border border-grey-300 py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500"
                onClick={() => {
                  setIsContextMenuVisible(!isContextMenuVisible)
                }}
              >
                <RxHamburgerMenu></RxHamburgerMenu>
                {userInfo ? (
                  <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
                    {userInfo.name?.split("").shift().toUpperCase()}
                  </span>
                ) : (
                  <span>
                    <img
                      src="/empty-profile.png"
                      alt="profile"
                      height={30}
                      width={30}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <ConnectDialog />
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
          cordinates={{
            x: window.innerWidth - 200,
            y: 70,
          }}
          options={userInfo ? authenticatedMenuOptions : contextMenuOptions}
        ></ContextMenu>
      )}
    </nav>
  )
}

export default Navbar
