import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import FundTransfer from '../Views/Transfer/Transfer'
import Container from '../Views/Container'
import Home from '../Views/Home/Home'
import Deposit from '../Views/Transfer/Deposit'
import Error404 from '../Views/Navagation/Error'
import Login from '../Views/Components/Login/Login'

export default function DefaultRouter() {
  const token = true
  return (
    <BrowserRouter>
      <Routes>
        {!token ?
          <Route path="/" element={<Login />} replace>
            <Route exact path="*" element={<Error404 />} />
          </Route>
          :
          <Route path="/" element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="/Transfer" element={<FundTransfer />} />
            <Route path="/AddCrypto" element={<Deposit />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        }
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>


  )
}