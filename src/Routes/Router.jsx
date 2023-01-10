import { useContext, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Element for Routes
import FundTransfer from "../Views/Admin/Transfer"
import SendCrypto from "../Views/Crypto/SentCrypto"
import Landing from "../Views/Container"
import Home from "../Views/Home/Home"
import AddCrypto from "../Views/Crypto/AddCrypto"
import Error404 from "../Views/Navagation/Error"
import Login from "../Views/Login/Login"
import Statment from "../Views/Crypto/Statment"
import Register from "../Views/Login/Register"
import Block from "../Views/Admin/Block"
import Admin from "../Views/Admin/Admin"
import RequireAuth from "../Views/RequireAuth"
// Additional configuration
import AuthContext from "../Apps/Context/AuthContext"

export default function DefaultRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<RequireAuth />} replace>
            <Route path="/" element={<Home />} />
            <Route path="/SentCrypto" element={<SendCrypto />} />
            <Route path="/AddCrypto" element={<AddCrypto />} />
            <Route path="/Statment" element={<Statment />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Block" element={<Block />} />
            <Route path="/Transfer" element={<FundTransfer />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/unauthorized" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
