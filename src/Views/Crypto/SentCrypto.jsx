import { useState } from "react"
import axios from "axios"

const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import image from "../../Images/fundadd.gif"

import useAuth from "../../Apps/Hook/useAuth"

export default function SendCrypto() {
  try {
    const { auth } = useAuth()
    const WALLETID = auth.walletid
    const [reciver, setReciver] = useState(0)
    const [amount, setAmount] = useState(0)
    const [body, setBody] = useState("Crypto Transfer")
    const [pin, setPin] = useState()

    const [_loading, _setLoading] = useState(false)
    const [output, setOutput] = useState(false)

    const handleSubmit = () => {
      if (!reciver) {
        alert("Receiver cannot be null")
      }
      if (!amount) {
        alert("Amount cannot be null")
      }
      _setLoading(true)
      const options = {
        method: "POST",
        url: api + "/vartix/create",
        data: {
          from: WALLETID,
          to: reciver,
          amount: amount,
          body: body,
        },
      }
      axios
        .request(options)
        .then((response) => {
          setAmount(0)
          setOutput(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => _setLoading(false))
    }

    return (
      <div
        className="w-100 col-xl-10 col-xxl-8 px-4 py-5"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="d-none d-xxl-block d-xl-block d-lg-block">
              <h1
                className="display-4  lh-1 mb-3 m-3 BlackOpsOne"
                style={{ color: "#09b372" }}
              >
                Pay With Crypto
              </h1>
              {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-md-8 mx-auto col-lg-4 col-sm-12">
            <div className="p-4 p-md-5 border rounded-3 bg-light">
              <p className="col-lg-10 fs-4">Sender</p>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Wallet ID
                </span>
                <input
                  placeholder={WALLETID}
                  disabled
                  className="form-control"
                />
              </div>

              <p className="col-lg-10 fs-4 ">Receiver</p>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput1"
                  onClick={(e) => setReciver(e.target.value)}
                />
                <label htmlFor="floatingInput1">Wallet Number</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput2"
                  onClick={(e) => setAmount(e.target.value)}
                />
                <label htmlFor="floatingInput2">Amount</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  type="Text"
                  className="form-control"
                  id="floatingInput3"
                  onClick={(e) => setBody(e.target.value)}
                />
                <label htmlFor="floatingInput3">About</label>
              </div>
              {/* <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword4"
                placeholder="Password"
          
              />
              <label htmlFor="floatingPassword4">PIN</label>
            </div> */}

              <button
                className="d-print-none w-100 btn btn-primary btn-lg"
                onClick={handleSubmit}
              >
                {!_loading ? (
                  <span>Send</span>
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
                By clicking Sign up, you agree to the terms of use.
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (e) {
    console.error(e)
    return <>{e}</>
  }
}
