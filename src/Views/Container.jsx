import { useState } from 'react'
import Navbar from './Navagation/Navbar'
import FundTransfer from './Transfer/FundTransfer'
import SideNav from './Navagation/SideNav'


export default function Container() {
  const [count, setCount] = useState(0)

  return (
<>
      <Navbar/>
    <div className="off-canvas">
  <div id="sidebar-id" className="off-canvas-sidebar">
          {/* <!-- off-screen sidebar --> */}
          <SideNav/>
  </div>
  <a className="off-canvas-overlay" href="#close"></a>

  <div className="off-canvas-content" >
          {/* <!-- off-screen content --> */}
        </div>
      </div>
        <FundTransfer/>
      </>
  )
}
 
