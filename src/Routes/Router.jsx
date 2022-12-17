import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import FundTransfer from '../Views/Admin/Transfer'
import SendCrypto from '../Views/Crypto/SentCrypto'
import Landing from '../Views/Container'
import Home from '../Views/Home/Home'
import AddCrypto from '../Views/Crypto/AddCrypto'
import Error404 from '../Views/Navagation/Error'
import Login from '../Views/Components/Login/Login'
import Report from '../Views/Crypto/Report'
import AddWallet from '../Views/Admin/AddWallet'
import Block from '../Views/Admin/Block'
import Admin from '../Views/Admin/Admin'
import RequireAuth from '../Views/RequireAuth'



export default function DefaultRouter() {
  // const authInfo = useContext(AuthContext)
  // const { token } = authInfo.auth
  // const { updateAuth } = authInfo
  // console.log('==>', authInfo);
  // useEffect(() => {
  //   updateAuth()
  // }, []);
  const ROLES = {
    'User': 2001,
    'Admin': 5150
  }
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/" element={<RequireAuth allowedRoles={[ROLES.User]} />} replace>
            <Route path="/SentCrypto" element={<SendCrypto />} />
            <Route path="/AddCrypto" element={<AddCrypto />} />
            <Route path="/Report" element={<Report />} />
          </Route>
          <Route path="/" element={<RequireAuth allowedRoles={[ROLES.Admin]} />} replace>
            <Route path="/Admin" element={<Admin />} />
            <Route path="/AddWallet" element={<AddWallet />} />
            <Route path="/Block" element={<Block />} />
            <Route path="/Transfer" element={<FundTransfer />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Route>

        <Route path="/unauthorized" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>


  )
}