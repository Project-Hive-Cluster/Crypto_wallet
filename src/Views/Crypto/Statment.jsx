import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

// ui
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import logo from "../../Images/snowflake-snow-svgrepo-com.svg"
import CryptoPaisha from "../../../src/Images/logo.svg"
// Context
import useAuth from "../../Apps/Hook/useAuth"

export default function Statment() {
  let timestamp = new Date().toString()
  // timestamp = moment(timestamp).format("MMM Do YYYY, h:mm a")

  const { auth } = useAuth()
  const walletid = auth.walletid
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  const [period, setPeriod] = useState(false)
  const [table, setTable] = useState()
  const [user, setUser] = useState({
    firstname: "No First Name",
    lastname: "No Last Name",
    contact: "Null",
  })

  let updateCredit = 0
  let updateDebit = 0
  let updateSum = 0
  const handlePrint = () => {
    window.print()
  }
  const handelSubmit = () => {
    const options = {
      method: "POST",
      url: api + `${period ? "/vartix/statment_period" : "/vartix/statment"}`,
      data: period
        ? { walletid: walletid, from: fromDate, to: toDate }
        : { walletid: walletid },
    }
    axios
      .request(options)
      .then((response) => {
        let responseData = response.data
        setTable(responseData.data)
      })
      .catch((error) => {
        console.error(error)
      })
    // .finally(() => _setLoading(false))
  }

  /* 
  * - - - - - - - - - - - - - - - - -
  *
             Use Effect
  *
  * - - - - - - - - - - - - - - - - -
  */

  useEffect(() => {
    const options = {
      method: "POST",
      url: api + "/wallet/search",
      data: {
        walletid: walletid,
      },
    }
    axios
      .request(options)
      .then((response) => {
        let data = response.data
        data = data[0]
        setUser(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="">
      <div className="row p-2">
        <div className="col-2 d-print-none">
          <div className="p-1 m-3">
            {period ? (
              <>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    From
                  </label>
                  <DatePicker
                    onChange={setFromDate}
                    value={fromDate}
                    maxDate={new Date()}
                    className="form-control"
                  />
                </div>

                <div className="input-group">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    To
                  </label>
                  <DatePicker
                    onChange={setToDate}
                    value={toDate}
                    maxDate={new Date()}
                    className="form-control"
                  />
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="form-check form-switch mt-3">
              <input
                disabled
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                value={period}
                onChange={(e) => setPeriod(e.target.checked)}
              />

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Period <span className="badge text-bg-danger ">Disabled</span>
              </label>
            </div>

            <button
              type="button"
              className="btn btn-outline-primary w-100 mt-2"
              onClick={handelSubmit}
            >
              Search
            </button>

            <button
              type="button "
              className="btn w-100 mt-1 btn-outline-secondary"
              onClick={handlePrint}
            >
              Print
            </button>
          </div>
        </div>

        <div className="col-lg-10">
          <div className="row container coloums">
            <div>
              <div className="container">
                <div className="row p-3">
                  <div className="col-8 align-items-center">
                    <img src={CryptoPaisha} height="80px" />
                    {/* <address className="text-wrap col-4 ">
                      beeCoin
                      <br />
                      1355 Market St, Suite 900 San Francisco, CA 94103 P: (123)
                      456-7890
                    </address> */}
                  </div>
                  <div className="col-4">
                    <strong>Wallet</strong>:{walletid}
                    <br />
                    <strong>Titel</strong>:{user.firstname} {user.lastname}
                    <br />
                    <strong>Contact</strong>:{user.contact}
                    {period ? (
                      <>
                        <br />
                        <strong>Period </strong>
                        {moment(fromDate).format("ll")}
                        <strong> To </strong>
                        {moment(toDate).format("ll")}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="row text-center p-1">
                <h4>Statment</h4>
              </div>
            </div>

            <div className="container col-12 row">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Timestamp</th>
                    <th scope="col">TR No</th>
                    <th scope="col">Debit</th>
                    <th scope="col">Credit</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Remarks</th>
                  </tr>
                </thead>
                <tbody className="">
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
                        updateDebit = updateDebit + debit
                        updateCredit = updateCredit + credit
                        updateSum = updateSum - debit
                        updateSum = updateSum + credit
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
                            <td>{updateSum}</td>
                            <td className="text-wrap text-break">{body}</td>
                          </tr>
                        )
                      }
                    )
                  )}

                  <tr className="table-group-divider">
                    <td colSpan={3}></td>
                    <td className="fw-bold">{updateDebit}</td>
                    <td className="fw-bold">{updateCredit}</td>
                    <td className="fw-bold">{updateSum}</td>
                    <td colSpan={1}></td>
                  </tr>
                </tbody>
                <caption>Timestamp:{timestamp}</caption>
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
