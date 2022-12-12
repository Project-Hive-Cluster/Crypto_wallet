import { useEffect } from 'react'
import logo from '../../Images/snowflake-snow-svgrepo-com.svg'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import moment from 'moment'


export default function Block() {



    return (
        <div>
            <Get url="http://127.0.0.1:8080/spine/get" params={{ id: "12345" }}>
                {(error, response, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        const data = response.data

                        return (

                            <div className="col-12 p-5">
                                <h2>Block Chain</h2>
                                <br />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Walletid</th>
                                            <th scope="col" >Titel</th>
                                            <th scope="col">Timestamp</th>

                                            <th scope="col">Amount</th>
                                            <th scope="col">Sign</th>

                                            <th scope="col">Body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(({ id, walletid, walletkey, timestamp, amount, signatue, body }) => {
                                            return (<tr>
                                                <th scope="row" key={id}>{id}</th>
                                                <td key={walletid}>{walletid.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4")}</td>
                                                <td key={walletkey} className='text-wrap text-break'>{walletkey}</td>
                                                <td key={timestamp}>{moment(timestamp).format('lll')}</td>
                                                <td key={amount}>{amount}</td>
                                                <td key={signatue} className='text-wrap text-break'>{signatue ? "True" : 'False'}</td>
                                                <td key={body} className='text-wrap text-break'>{body}</td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                }}
            </Get>
        </div>
    )


}



