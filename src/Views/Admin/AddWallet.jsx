import { useState } from "react"
import axios from "axios"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
// Components
import image from "../../Images/addWallet.gif"
import CryptoCard from "../Components/CryptoCard"

export default function AddWallet() {
  return (
    <div className="container ">
      <div className="row">
        <div className="d-print-none col-lg-6 col-md-4 p-2">
          <div className="d-none d-md-block d-xxl-block d-xl-block d-lg-block d-md-block">
            <br />
            <h1 className="mb-3 mt-5 BlackOpsOne" style={{ color: "#36467f" }}>
              Add Wallet
            </h1>
            <img src={image} height="70%" />
          </div>
        </div>

        <div className="col-lg-6 col-md-8 col-sm-12 bg-white">
          <FormInput />
        </div>
      </div>
    </div>
  )
}

export function FormInput() {
  const [email, setEmail] = useState()
  const [_loading, _setLoading] = useState(false)
  const [firstname, setFirst] = useState()
  const [lastname, setLast] = useState()
  const [password, setPassword] = useState()
  const [repassword, setRePassword] = useState()
  const [contact, setContact] = useState()
  const [output, setOutput] = useState(false)

  const handleSubmit = () => {
    if (password != repassword) {
      alert("Passwords do not match")
    }

    const options = {
      method: "POST",
      url: api + "/blockchain/create",
      data: {
        email,
        firstname,
        lastname,
        contact,
        password,
      },
    }
    axios
      .request(options)
      .then(function (response) {
        setOutput(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <div className="p-2 m-3">
        <div className="row g-3 d-print-none">
          <label htmlFor="username" className="form-label">
            Name
          </label>

          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">First</span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setFirst(event.target.value)}
                placeholder="First Name"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">Last</span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setLast(event.target.value)}
                placeholder="Last Name"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input
                type="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@domain.com"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">#</span>
              <input
                type="email"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="example@domain.com"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <span className="input-group-text">#</span>
              <input
                type="email"
                className="form-control"
                onChange={(event) => setRePassword(event.target.value)}
                placeholder="example@domain.com"
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => setContact(event.target.value)}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          {/* <div className="col-12">
              <label htmlFor="address" className="form-label">Password</label>
              <input type="text" className="form-control" id="address" />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country">
                <option value>Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div> */}
          {/* <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div> */}
        </div>
        <br />

        {!output ? (
          ""
        ) : (
          <div className="d-print-block">
            <div className="card-head ">
              <div
                className="container"
                style={{ transform: "scaleX(0.8) scaleY(0.8)" }}
              >
                <CryptoCard
                  cardno={output.walletid}
                  f_name={firstname}
                  l_name={lastname}
                />
              </div>
            </div>
            <div className="text-left">
              <br />
              <dl className="row">
                <>
                  <dt className="col-sm-3">Username</dt>
                  <dd className="col-sm-9">: {email}</dd>
                  <dt className="col-sm-3">Password</dt>
                  <dd className="col-sm-9">: {password}</dd>
                  <dt className="col-sm-3">Wallet No</dt>
                  <dd className="col-sm-9">: {output.walletid}</dd>
                  <dt className="col-sm-3">Security key</dt>
                  <dd className="col-sm-8">: {output.id}</dd>
                </>
              </dl>
            </div>
          </div>
        )}
        <hr className="my-4" />
        <button
          className=" d-print-none w-100 btn btn-primary btn-lg"
          onClick={handleSubmit}
        >
          {!_loading ? (
            <span>Genarate Wallet Key</span>
          ) : (
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
        </button>
      </div>
    </>
  )
}
