import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import image_block from "../../Images/blockchainhexa.gif"

export default function Block() {
  const [errMsg, setErrMsg] = useState(null)
  const [table, setTable] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: api + "/blockchain/hiveData",
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response)
        setTable(response.data)
        setErrMsg(null)
      })
      .catch((error) => {
        setErrMsg(JSON.stringify(error))
      })
  }, [])

  return (
    <div className="col-12 p-5">
      <div className="d-flex align-items-center flex-row">
        <img src={image_block} className="col-1" />
        <h1 className="fs-1">Block Chain</h1>
      </div>
      <br />
      {errMsg ? (
        <div style={{ backgroundColor: "tomato" }} className="rounded  p-5">
          <h1>Error</h1>
          <h3>Fail to load content</h3>
          <p className="container text-break">
            <b>Error:</b> {errMsg}
          </p>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Walletid</th>
              <th scope="col">User</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Amount</th>
              <th scope="col">Sign</th>
              <th scope="col">Contact</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {table.length < 1 ? (
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
                ({
                  id,
                  walletid,
                  owner,
                  timestamp,
                  amount,
                  signatue,
                  body,
                }) => {
                  return (
                    <tr key={walletid}>
                      <td>
                        <b>{id}</b>
                      </td>
                      <td>
                        {walletid.replace(
                          /^(.{4})(.{4})(.{4})(.*)$/,
                          "$1-$2-$3-$4"
                        )}
                      </td>
                      <td className="text-wrap text-break">{owner.email}</td>
                      <td>
                        {moment(timestamp.replace(/"/g, "")).format("lll")}
                      </td>
                      <td>{amount}</td>
                      <td className="text-wrap text-break">
                        {signatue ? (
                          <i className="bi bi-check2-circle"></i>
                        ) : (
                          <i className="bi bi-slash-circle"></i>
                        )}
                      </td>
                      <td className="text-wrap text-break">{owner.contact}</td>
                      <td className="text-wrap text-break">
                        {JSON.stringify(body).replace(/"|\\|}|{|\|/g, "")}
                      </td>
                    </tr>
                  )
                }
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}
