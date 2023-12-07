import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import FormInput from "./FormInput"
import { useCanister } from "@connect2ic/react"
import { useConnect } from "@connect2ic/react"


const AuthModal = () => {
  const [backend] = useCanister("backend");
  const { isConnected } = useConnect()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [userFound, setUserFound] = useState(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true)

  const signup = async (firstName) => {
    const res = await backend.signUp(firstName, "Male");
    console.log("RES IS: ", res);
    if (res.ok){
      return res.ok;
    }
    return null;
  }

  const checkUser = async (email) => {
    const res = await backend.getMiUser();
    console.log("USUario es: ", res)
    if (res?.length > 0){
        return true;
    }
    return false;
  }

  const verifyEmail = async () => {
    const data = await checkUser(email)
    if (!data) setUserFound(false)
    else {
      setUserFound(true);
      setIsAuthModalOpen(false);
    }
  }

  const handleSignup = async () => {
    if (firstName) {
      const data = await signup(firstName)
      if (data){
        setIsAuthModalOpen(false);
      }
    }
  }

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <>
      { (isAuthModalOpen || userFound == false ) && (!isConnected) && (
        <div className="relative z-50 text-black">
          <div className="fixed inset-0 bg-[rgb(25,33,77,0.46)] transition-opacity">
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white pb-4 pt-5">
                    <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                      <span
                        className="absolute left-5 cursor-pointer text-lg"
                        onClick={() => setIsAuthModalOpen(false)}
                      >
                        <IoMdClose></IoMdClose>
                      </span>
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
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AuthModal
