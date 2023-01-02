import { createContext, useState } from "react"
const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  //   const [auth, setAuth] = useState({ token: cookies.auth })
  const [walletid, setWalletid] = useState()

  return (
    <AuthContext.Provider value={{ walletid, setWalletid }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
