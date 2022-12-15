import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import uuid from "react-uuid"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Block() {
  const [table, setTable] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:2000/spine/get",
    }
    axios
      .request(options)
      .then(function (response) {
        setTable(response.data)
      })
      .catch(function (error) {
        return (
          <div>
            Something bad happened: {error.message}{" "}
            <button onClick={() => makeRequest({ params: { reload: true } })}>
              Retry
            </button>
          </div>
        )
      })
  }, [])
  return (
    <div className="col-12 p-5">
      <h2>Block Chain</h2>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Walletid</th>
            <th scope="col">Titel</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Amount</th>
            <th scope="col">Sign</th>
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
                walletkey,
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
                    <td className="text-wrap text-break">{walletkey}</td>
                    <td>{moment(timestamp.replace(/"/g, "")).format("lll")}</td>
                    <td>{amount}</td>
                    <td className="text-wrap text-break">
                      {signatue ? (
                        <i className="bi bi-check2-circle"></i>
                      ) : (
                        <i className="bi bi-slash-circle"></i>
                      )}
                    </td>
                    <td className="text-wrap text-break">
                      {body.replace(/"/g, "")}
                    </td>
                  </tr>
                )
              }
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
