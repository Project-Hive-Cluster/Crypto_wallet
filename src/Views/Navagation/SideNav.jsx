import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import converter from "number-to-words"
import axios from "axios"

const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import useAuth from "../../Apps/Hook/useAuth"

export default function SideNav() {
  const { auth, setAuth } = useAuth()
  const handelAuth = () => {
    setAuth()
  }
  const [balance, setBalance] = useState("***")
  const [btn, setBtn] = useState(false)

  const handelShowBalance = async () => {
    await handleBalance({ wallet: auth.walletid })
    setBtn(true)
    setTimeout(() => {
      setBtn(false)
      setBalance("***")
    }, 7000)
  }

  const handleBalance = ({ wallet }) => {
    const options = {
      method: "POST",
      url: api + "/vartix/balance",
      data: {
        walletid: wallet,
      },
    }
    axios
      .request(options)
      .then((response) => {
        let res_temp = response.data
        res_temp = res_temp.Balance
        setBalance(res_temp)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div className="card">
        <div className="card-header">
          <i className="bi bi-coin mx-1"></i>
          Balance
        </div>
        <div className="card-body">
          {typeof balance === "number" ? (
            <>
              <h5 className="card-title  p-2 text-center">{balance} Coin</h5>
              <p className="text-capitalize font-monospace text-muted">
                {converter.toWords(balance)} coin
              </p>
            </>
          ) : (
            <></>
          )}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              // checked
              type="checkbox"
              checked={btn}
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handelShowBalance}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Show Balance
            </label>
          </div>
        </div>
      </div>

      <br />
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Profile
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <RegistationNav />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Crypto
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Crypto />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Admin
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <AdminrNav />
            </div>
          </div>
        </div>
        <nav className="nav flex-column mt-2">
          <Link
            style={{ borderradius: "25px" }}
            className="nav-link btn-danger text-light btn"
            to={"/login"}
            onClick={handelAuth}
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  )
}

export const HeroComponent = () => {
  return (
    <div className="px-4 py-5 text-center">
      <img
        className="d-block mx-auto"
        src={logo}
        alt=""
        width="72"
        height="57"
      />
      <div className="col-lg-6 mx-auto"></div>
    </div>
  )
}

export const RegistationNav = () => {
  return (
    <nav className="nav flex-column">
      <Link className="nav-link" to={"/"}>
        Dashboard
      </Link>
      <Link className="nav-link" to={"/Statment"}>
        Statment
      </Link>
      <Link className="nav-link" to={"/change_passwd"}>
        Change Password
      </Link>
    </nav>
  )
}

export const Crypto = () => {
  return (
    <nav className="nav flex-column">
      <Link className="nav-link" to={"/AddCrypto"}>
        Add Crypto
      </Link>
      <Link className="nav-link" to={"/SentCrypto"}>
        Sent Crypto
      </Link>
      <Link className="nav-link" to={"/Transfer"}>
        Transfer
      </Link>

      {/* <Link className="nav-link" to={"/Report"}>
        Report
      </Link> */}
    </nav>
  )
}
export const AdminrNav = () => {
  return (
    <nav className="nav flex-column">
      <Link className="nav-link" to={"/register"}>
        Add Wallet
      </Link>
      <Link className="nav-link" to={"/Block"}>
        View Block
      </Link>
      <Link className="nav-link" to={"/Admin"}>
        Admin
      </Link>
    </nav>
  )
}
