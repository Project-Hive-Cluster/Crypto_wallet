import { useEffect, useContext, useState } from "react"
import axios from "axios"
import moment from "moment"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import logo from "../../Images/snowflake-snow-svgrepo-com.svg"

// Context
import { AuthProvider } from "../../Apps/Context/AuthContext"

export default function Report() {
  // walletid, setWalletid
  const walletid = "1778500000000032"
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const [debit, setDebit] = useState()
  const [credit, setCredit] = useState()
  const [table, setTable] = useState()

  const handelSubmit = () => {
    const options = {
      method: "POST",
      url: api + "/vartix/look",
      data: {
        walletid: walletid,
      },
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        setTable(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => _setLoading(false))
  }

  return (
    <div className="">
      <div className="row p-2">
        <div className="col-2">
          <div className="p-1 m-3">
            <label htmlFor="inputPassword5" className="form-label">
              From
            </label>
            <input type="date" id="inputPassword5" className="form-control" />
            <label htmlFor="inputPassword5" className="form-label">
              To
            </label>
            <input type="date" id="inputPassword5" className="form-control" />
            <br />
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handelSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-10">
          <div className="row container coloums">
            <div style={{ backgroundColor: "#DEDEDE" }}>
              <div className="container text-center">
                <div className="row p-3">
                  <div className="col-10 text-center align-items-center">
                    <br />
                    <h2>Statment</h2>
                  </div>
                  <div className="col-2">
                    <div className="row">
                      <img src={logo} height="50px" />
                      <h1>Crypto</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-6">
                  <strong>Wallet</strong>:{walletid}
                  <br />
                  <strong>Titel</strong>:hebghby
                  <br />
                  <strong>Contact</strong>:hebghby
                </div>
                <div className="col-6">
                  <strong>Period</strong>:hebghby<strong> To </strong>
                  <br />
                  <strong>TimeStamp</strong>:hebghby
                  <br />
                </div>
              </div>
            </div>

            <div className="container col-12 row">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Source</th>
                    <th scope="col">Destenition</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {!table ? (
                    <tr key="111">
                      <th scope="row">
                        <Skeleton />
                      </th>
                      <td>
                        <Skeleton />
                      </td>
                      <td className="text-wrap text-break">
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td className="text-wrap text-break">
                        <Skeleton />
                      </td>
                      <td className="text-wrap text-break">
                        <Skeleton />
                      </td>
                    </tr>
                  ) : (
                    table.map(
                      (
                        { transaction_no, debit, credit, timestamp, body },
                        index
                      ) => {
                        // while (index < 10) {
                        return (
                          <tr key={"uuid" + index}>
                            <td>
                              <b>{index + 1}</b>
                            </td>
                            <td>
                              {moment(timestamp.replace(/"/g, "")).format(
                                "lll"
                              )}
                            </td>
                            <td>{transaction_no}</td>
                            <td>{debit}</td>
                            <td>{credit}</td>
                            <td className="text-wrap text-break">{body}</td>
                          </tr>
                        )
                        // }
                      }
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SearchBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-text text-center">Statment</span>
        <form className="ml-auto d-flex" role="search">
          <span className="navbar-text mx-2 ">From</span>

          <input
            className="form-control me-2"
            type="date"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="navbar-text mx-2 ">To</span>
          <input
            className="form-control me-2"
            type="date"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}
