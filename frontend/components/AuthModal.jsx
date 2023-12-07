import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import FormInput from "./FormInput"
import { useCanister } from "@connect2ic/react"
import { useAuthStore } from "../store/auth.store"


const AuthModal = () => {
  const [backend] = useCanister("backend");
  const { setUserInfo, userInfo, setIsAuthModalOpen } = useAuthStore();
  const [firstName, setFirstName] = useState("");

  const signup = async (firstName) => {
    const res = await backend.signUp(firstName);
    console.log("RES IS: ", res);
    if (res.ok){
      return res.ok;
    }
    return null;
  }

  const handleSignup = async () => {
    if (firstName) {
      const data = await signup(firstName);
      console.log("DATA IS", data)
      if (data){
        setIsAuthModalOpen();
        setUserInfo(data);
      }
    }
  }

  return (
    <>
        <div className="relative z-50 text-black">
          <div className="fixed inset-0 bg-[rgb(25,33,77,0.46)] transition-opacity">
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white pb-4 pt-5">
                    <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                      <span>Registrate</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl pb-5">
                        Bienvenido a ICP Tutorials
                      </h3>
                        <div className="flex gap-3 flex-col">
                          <FormInput
                            name="name"
                            placeholder="Nombre"
                            value={firstName}
                            setValue={setFirstName}
                          ></FormInput>
                        </div>
                      <button
                        className="bg-indigo-500 py-3 mt-5 w-full text-white font-medium rounded-md hover:bg-indigo-600"
                        onClick={handleSignup}
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AuthModal
