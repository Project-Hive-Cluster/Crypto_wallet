import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const useAuth = () => {
  return useContext(AuthContext.Consume)
}

export default useAuth
