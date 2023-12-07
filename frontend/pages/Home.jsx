import React, { useEffect } from "react"
import { useCanister } from "@connect2ic/react"
import { useConnect } from "@connect2ic/react"
import AuthModal from "../components/AuthModal"
import { useAuthStore } from "../store/auth.store"

const Home = () => {
  const { principal, isConnected } = useConnect()
  const { isAuthModalOpen, setIsAuthModalOpen, setUserInfo } = useAuthStore()

  const [backend] = useCanister("backend")

  const checkUser = async () => {
    const res = await backend.getMiUser()
    console.log("Usuario es: ", res)
    if (res?.length > 0) {
      return res[0]
    }
    return null
  }

  const verifyUser = async () => {
    const data = await checkUser();
    if (!data) {
      setIsAuthModalOpen()
    }
    else {
        setUserInfo(data);
    }
  }

  useEffect(() => {
    if (isConnected){
        verifyUser();
    }
  }, [isConnected]);

  return (
    <div className="flex flex-col h-[85vh] items-center pt-[100px] dark:bg-neutral-800 dark:text-white">
      <h1 className="text-3xl font-bold underline">Todos los tutoriales</h1>
      <p> Hola: {principal}</p>
      {isAuthModalOpen && <AuthModal></AuthModal>}
    </div>
  )
}

export { Home }
