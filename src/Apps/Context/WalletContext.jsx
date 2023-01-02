import { createContext, useState } from "react"
const WalletContext = createContext({})

export const WalletProvider = ({ children }) => {
  const [walletid, setWalletid] = useState("746467357")

  return (
    <WalletContext.Provider value={{ walletid, setWalletid }}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletContext
