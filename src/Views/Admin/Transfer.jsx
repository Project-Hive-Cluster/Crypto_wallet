import { useState } from "react"
import axios from "axios"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import image from "../../Images/transfer.jpg"

export default function FundTransfer() {
  const [sender, setSenders] = useState()
  const [reciver, setReciver] = useState()
  const [amount, setAmount] = useState()
  const [massage, setMassage] = useState()
  const [_loading, _setLoading] = useState(false)
  const [output, setOutput] = useState({ status: false, massage: "" })

  const handelOutput = (data) => {
    setOutput({ status: true, massage: data })
  }
  const handelValidition = () => {
    if (sender && reciver && amount) {
      setOutput("Please Provide all Mandatory Parameters")
    }
  }
  const handelTransfer = () => {
    try {
      _setLoading(true)
      const _body = massage ? massage : `${sender} > ${reciver} `

      const options = {
        method: "POST",
        url: api + "/vartix/create",
        data: {
          from: sender,
          to: reciver,
          amount: amount,
          body: _body,
        },
      }

      axios
        .request(options)
        .then((response) => {
          setAmount(0)
          handelOutput(response.data)
          console.log(output)
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => _setLoading(false))
    } catch (error) {
      console.error("Error creating request", error)
      alert("Error creating request", error)
    }
  }

  return (
    <div className="w-100 col-xl-10 col-xxl-8 px-4 py-5">
      {/* model */}
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {!output.status ? (
              <div className="modal-body p-5 ">
                <table className="table table-striped-columns table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">From</th>
                      <td>{sender}</td>
                    </tr>
                    <tr>
                      <th scope="row">To</th>
                      <td>{reciver}</td>
                    </tr>
                    <tr>
                      <th scope="row">Amount</th>
                      <td>{amount}</td>
                    </tr>
                    <tr>
                      <th scope="row">Massage</th>
                      <td>{massage}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="modal-footer">
                  <br />
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="addon-wrapping"
                  />
                  <br />
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-secondary m-2"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      className="d-print-none btn btn-primary"
                      onClick={handelTransfer}
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
                  </div>
                </div>
              </div>
            ) : output.status ? (
              <div className="modal-body p-5 ">
                <div>{output.massage}</div>
              </div>
            ) : (
              <div className="modal-body p-5 ">
                <div>{output.massage}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* model end */}
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <div className="d-none d-xxl-block d-xl-block d-lg-block">
            <img src={image} className="d-fix col-12" />
          </div>
        </div>
        <div className="col-md-8 mx-auto col-lg-4">
          <h1
            className="display-4 lh-1 BlackOpsOne"
            style={{ color: "#09b372" }}
          >
            Crypto Transfer
          </h1>
          <div className="p-4 p-md-5 border rounded-3 bg-light">
            <p className="col-lg-10 fs-4">Sender</p>
            <div className="input-group mb-3">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setSenders(e.target.value)}
                />
                <label htmlFor="floatingInput">From Wallet</label>
              </div>
            </div>

            <p className="col-lg-10 fs-4 ">Reciver</p>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setReciver(e.target.value)}
              />
              <label htmlFor="floatingInput">To Wallet</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setAmount(e.target.value)}
              />
              <label htmlFor="floatingInput">Amount</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Text"
                className="form-control"
                onChange={(e) => setMassage(e.target.value)}
              />
              <label htmlFor="floatingInput">Massage</label>
            </div>
            <button
              onClick={handelValidition}
              type="button"
              className="w-100 btn btn-lg btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Send
            </button>

            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
