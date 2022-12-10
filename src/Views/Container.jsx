import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navagation/Navbar'
import FundTransfer from './Transfer/Transfer'
import SideNav from './Navagation/SideNav'
import logo from "../Images/react.svg"


export default function Container() {
  const [count, setCount] = useState(0)

  return (
    <main>


      <Navbar />
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img className="d-block mx-auto" src={logo} alt="" width="72" height="30" /></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <SideNav />
        </div>
      </div>



      <Outlet />
    </main>)
}
