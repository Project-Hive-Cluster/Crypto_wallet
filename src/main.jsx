import React from "react"
import ReactDOM from "react-dom/client"
import DefaultRouter from "./Routes/Router"
import AuthProvider from "./Apps/Context/AuthContext"

import "./Styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DefaultRouter />
    </AuthProvider>
  </React.StrictMode>
)
