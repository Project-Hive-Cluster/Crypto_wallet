import React from "react"
import ReactDOM from "react-dom/client"
import DefaultRouter from "./Routes/Router"
import { CookiesProvider } from "react-cookie"
import { AuthProvider } from "./Apps/Context/AuthContext"
import { WalletProvider } from "./Apps/Context/WalletContext"

import "./Styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <WalletProvider>
        {/* <AuthProvider> */}
        <DefaultRouter />
        {/* </AuthProvider> */}
      </WalletProvider>
    </CookiesProvider>
  </React.StrictMode>
)
