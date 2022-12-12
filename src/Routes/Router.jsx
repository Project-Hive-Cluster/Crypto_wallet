import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import FundTransfer from '../Views/Transfer/Transfer'
import Landing from '../Views/Container'
import Home from '../Views/Home/Home'
import Deposit from '../Views/Transfer/Deposit'
import Error404 from '../Views/Navagation/Error'
import Login from '../Views/Components/Login/Login'
import Report from '../Views/Transfer/Report'
import AddWallet from '../Views/Admin/AddWallet'
import Block from '../Views/Admin/Block'

export default function DefaultRouter() {
  // const authInfo = useContext(AuthContext)
  // const { token } = authInfo.auth
  // const { updateAuth } = authInfo
  // console.log('==>', authInfo);
  // useEffect(() => {
  //   updateAuth()
  // }, []);
  const token = true
  return (

    <BrowserRouter>
      <Routes>
        {!token ?
          <Route path="/" element={<Login />} replace>
            <Route exact path="*" element={<Error404 />} />
          </Route>
          :
          <Route path="/" element={<Landing />}>
            <Route path="/" element={<Home />} />
            <Route path="/Transfer" element={<FundTransfer />} />
            <Route path="/AddCrypto" element={<Deposit />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/AddWallet" element={<AddWallet />} />
            <Route path="/Block" element={<Block />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        }
        <Route path="/logout" element={<Login />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>


  )
}