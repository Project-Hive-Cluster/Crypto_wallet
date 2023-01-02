import { useContext, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Element for Routes
import FundTransfer from "../Views/Admin/Transfer"
import SendCrypto from "../Views/Crypto/SentCrypto"
import Landing from "../Views/Container"
import Home from "../Views/Home/Home"
import AddCrypto from "../Views/Crypto/AddCrypto"
import Error404 from "../Views/Navagation/Error"
import Login from "../Views/Components/Login/Login"
import Report from "../Views/Crypto/Report"
import AddWallet from "../Views/Admin/AddWallet"
import Block from "../Views/Admin/Block"
import Admin from "../Views/Admin/Admin"
import RequireAuth from "../Views/RequireAuth"
// Additional configuration
import AuthContext from "../Apps/Context/AuthContext"

export default function DefaultRouter() {
  const [access, setAccess] = useState()
  const [walletid, setWalletid] = useState()
  const ROLES = {
    User: 2001,
    Admin: 5150,
  }
  return (
    <BrowserRouter>
      <Routes>
        {access ? (
          <Route
            path="/"
            wallet={{ walletid, setWalletid }}
            element={
              <RequireAuth setAccess={setAccess} allowedRoles={[ROLES.User]} />
            }
            replace
          >
            <Route path="/" element={<Landing />}>
              <Route path="/" element={<Home />} />
              <Route path="/SentCrypto" element={<SendCrypto />} />
              <Route path="/AddCrypto" element={<AddCrypto />} />
              <Route path="/Report" element={<Report />} />
              {/* </Route> */}
              {/* <Route
            path="/"
            element={<RequireAuth allowedRoles={[ROLES.Admin]} />}
            replace
          > */}
              <Route path="/Admin" element={<Admin />} />
              <Route path="/AddWallet" element={<AddWallet />} />
              <Route path="/Block" element={<Block />} />
              <Route path="/Transfer" element={<FundTransfer />} />
              <Route path="/*" element={<Error404 />} />
            </Route>
            <Route path="/login" element={<Login setAccess={setAccess} />} />
          </Route>
        ) : (
          <Route path="/" element={<Login setAccess={setAccess} />} />
        )}
        <Route path="/unauthorized" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
