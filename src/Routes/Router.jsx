import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import FundTransfer from '../Views/Transfer/Transfer'
import Container from '../Views/Container'
import Home from '../Views/Home/Home'
import Deposit from '../Views/Transfer/Deposit'
import Error404 from '../Views/Navagation/Error'

export default function DefaultRouter() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/Transfer" element={<FundTransfer />} />
          <Route path="/AddCrypto" element={<Deposit />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}