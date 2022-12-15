import { useState } from "react"
import axios from "axios"
import CardList from "../Components/CardAnimitation"

export default function Deposit({ WALLETID = "0100900000000001" }) {
  const [_amount, setAmount] = useState(0)
  const [_loading, _setLoading] = useState(false)
  const [pin, setPin] = useState()
  const [output, setOutput] = useState(false)
  const [type, setType] = useState("Cash")

  const handleSubmit = () => {
    _setLoading(true)
    const options = {
      method: "POST",
      url: "http://127.0.0.1:2000/transfer",
      data: {
        waletid: "000000000000000",
        data: `Crypto Loaded in ${type}`,
        to: WALLETID,
        amount: _amount,
      },
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        setOutput(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => _setLoading(false))
  }

  return (
    <div className="container col-xl-10 col-xxl-8  py-5">
      <div className="row align-items-center g-lg-5 ">
        <CardList />
        <div
          className="container col-md-6 text-center text-lg-start m-2
       d-md-block d-lg-block d-xl-block d-none 
        "
        >
          <br />
          <h1
            className="display-4 fw-bold lh-1 mb-3 BlackOpsOne"
            style={{ color: "#311ba4" }}
          >
            Add Crypto
          </h1>
          {/* <p className="col-10 fs-4">Below is an example form.</p> */}
          <br />
        </div>
        <div className="container col-md-6 mx-auto col-lg-5 mt-4">
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

            {output.massage === "Insufficient Balance" ? (
              <>
                <hr className="my-4" />
                <div
                  bg-danger
                  className="container text-center rounded bg-danger p-5"
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
                  style={{ backgroundColor: "#ADD8E6" }}
                  className="rounded  p-5"
                >
                  <p className="container text-break">
                    {" "}
                    {JSON.stringify(output)}
                  </p>
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
