import logo from '../../Images/snowflake-snow-svgrepo-com.svg'



export default function Report() {

    return (
        <div className="">
            <div className="row">
                <div className="col-3 p-4 ">
                    <SideBar />
                </div>

                <div className="m-1 col ">
                    <StmBody />
                </div>
            </div>
        </div>
    )
}




export function SideBar() {
    return (
        <div className='m-5'>
            <label htmlFor="inputPassword5" className="form-label">From</label>
            <input type="date" id="inputPassword5" className="form-control" />
            <label htmlFor="inputPassword5" className="form-label">To</label>
            <input type="date" id="inputPassword5" className="form-control" />
            <br />
            <button type="button" className="btn btn-primary w-100">Search</button>
        </div>
    )
}
export function StmBody() {

    return (
        <div className="row container coloums m-5">
            <div style={{ backgroundColor: '#DEDEDE' }}>
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
                        <strong>Wallet</strong>:hebghby
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>46453.0</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>46453.0</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )

}


export const SearchBar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-text text-center">
                    Statment
                </span>
                <form className="ml-auto d-flex" role="search">
                    <span className="navbar-text mx-2 ">
                        From
                    </span>

                    <input className="form-control me-2" type="date" placeholder="Search" aria-label="Search" />
                    <span className="navbar-text mx-2 ">
                        To
                    </span>
                    <input className="form-control me-2" type="date" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
