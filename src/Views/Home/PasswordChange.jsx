import { useState } from "react"
import axios from "axios"
import image from "../../Images/fundadd.gif"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import useAuth from "../../Apps/Hook/useAuth"

export default function PasswordChange() {
  const { auth } = useAuth()

  const [currentPasswd, setCurrentPasswd] = useState()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [massage, setMassage] = useState(<></>)

  const handleOldPasswordChange = (event) => {
    setCurrentPasswd(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const validatePasswords = () => {
    setIsValid(password === confirmPassword)
  }

  const handleChange = () => {
    const options = {
      method: "POST",
      url: api + "/passwd_reset",
      data: {
        username: auth.user,
        password: currentPasswd,
        new_password: password,
      },
    }
    axios
      .request(options)
      .then((response) => {
        let res_temp = response.data
        res_temp.success
          ? setMassage(
              <div className="alert alert-success" role="alert">
                Password changed successfully
              </div>
            )
          : setMassage(
              <div className="alert alert-danger" role="alert">
                {res_temp}
              </div>
            )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="w-100 col-xl-10 col-xxl-8 px-4 py-1">
      <div className="row align-items-center g-lg-5 py-1">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-1 m-3 text-primary">
            Change password
          </h1>
        </div>
        <div className="col-md-12 mx-auto col-lg-8">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                onChange={handleOldPasswordChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                onChange={handlePasswordChange}
                onBlur={validatePasswords}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm
              </label>
              {isValid ? (
                <span className="font-monospace m-2 text-success">
                  Passwords match."
                </span>
              ) : (
                <span className="font-monospace m-2  text-danger">
                  Passwords don't match."
                </span>
              )}
              <input
                type="password"
                onChange={handleConfirmPasswordChange}
                onBlur={validatePasswords}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {massage ? massage : <></>}
            <br />
            <button onClick={handleChange} className="btn btn-primary w-100">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
