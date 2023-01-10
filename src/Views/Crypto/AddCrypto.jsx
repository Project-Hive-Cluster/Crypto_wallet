import { useState } from "react"
import axios from "axios"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import CardList from "../Components/CardAnimitation"
import useAuth from "../../Apps/Hook/useAuth"

export default function AddCrypto() {
  const { auth } = useAuth()
  const WALLETID = auth.walletid
  const [_amount, setAmount] = useState(0)
  const [_loading, _setLoading] = useState(false)
  const [pin, setPin] = useState()
  const [output, setOutput] = useState(false)
  const [type, setType] = useState("Cash")

  const handleSubmit = () => {
    _setLoading(true)
    const options = {
      method: "POST",
      url: api + "/vartix/load",
      data: {
        body: `Crypto Loaded in ${type}`,
        walletid: WALLETID,
        amount: _amount,
      },
    }
    axios
      .request(options)
      .then((response) => {
        setOutput(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => _setLoading(false))
  }

  return (
    <div className="container  py-5">
      <div className="row align-items-center g-lg-5">
        <div className="d-none d-xxl-block d-xl-block d-lg-block">
          <CardList />
        </div>
        <div className="container col-md-6 text-center text-lg-start m-2 d-none d-xxl-block d-xl-block d-lg-block">
          <br />
          <h1
            className="display-4 fw-bold lh-1 mb-3 BlackOpsOne"
            style={{ color: "#311ba4" }}
          >
            Get more Crypto
          </h1>
          <br />
        </div>

        <div
          className="container col-xl-4 col-lg-4 col-md-8 col-sm-10 mx-auto mt-4"
          style={{ zIndex: 99 }}
        >
          <div
            className="p-4 p-md-5 border rounded-3 bg-light"
            data-bitwarden-watching="1"
          >
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Wallet ID
              </span>
              <input
                placeholder={WALLETID.replace(
                  /^(.{4})(.{4})(.{4})(.*)$/,
                  "$1-$2-$3-$4"
                )}
                disabled
                className="form-control"
              />
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setAmount(e.target.value)}
              />
              <label htmlFor="floatingInput">Amount</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPin(e.target.value)}
              />
              <label htmlFor="floatingPassword">PIN</label>
            </div>
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label">
                Payment Type
              </label>
              <select
                id="disabledSelect"
                className="form-select"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Cash</option>
                <option>Card</option>
                <option>Crypto</option>
              </select>
            </div>
            {/* <span>Add Crypto</span> */}
            <button
              className="d-print-none w-100 btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              {!_loading ? (
                <span>Add Crypto</span>
              ) : (
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
            </button>

            {output === "Insufficient Balance" ? (
              <>
                <hr className="my-4" />
                <div
                  className="rounded
                p-5
                d-flex
                align-items-center justify-content-center
                container
                text-light
                bg-danger"
                >
                  <p className="text-break">Insufficient Balance</p>
                </div>
              </>
            ) : !output ? (
              <></>
            ) : (
              <>
                <hr className="my-4" />
                <div
                  className="
                rounded
                p-5
                d-flex
                align-items-center justify-content-center
                container"
                >
                  <p className="text-break">{JSON.stringify(output)}</p>
                </div>
              </>
            )}
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Submit, you agree to the terms of use.
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
