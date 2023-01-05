import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import jwt_decode from "jwt-decode"
import { useCookies } from "react-cookie"

// Context
import { WalletProvider } from "../Apps/Context/WalletContext"

const RequireAuth = ({ allowedRoles }) => {
  try {
    const contextValue = useContext(WalletProvider)

    console.log("RequireAuth=>", contextValue)

    const { setWalletid } = contextValue
    // walletid, setWalletid
    const [cookies] = useCookies(["auth"])
    if (!cookies) {
      setAccess(false)
      console.log("cookies not found")
    } else {
      const decoded = jwt_decode(cookies.auth)
      setWalletid(decoded.walletid)
      const publickey = decoded.key
      const location = useLocation()

      if (!cookies) {
        return <Navigate to="/" state={{ from: location }} replace />
      } else {
        return <Outlet walletid={walletid} publickey={publickey} />
      }
    }
  } catch (error) {
    console.log("Error in Permission.", error)
    return <Navigate to="/login" replace />
  }
}

/*   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
       <Outlet />
    ) : token ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
       <Navigate to="/login" state={{ from: location }} replace />
     ) */

export default RequireAuth
