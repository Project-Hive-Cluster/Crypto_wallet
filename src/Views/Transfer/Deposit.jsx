import CryptoCard from "../Components/CryptoCard";
import CardList from "../Components/CardAnimitation";




export default function Deposit({ PUBLICKEY = "hntry5by7nu56uw4enue46nu46eu" }) {


  return (
    <div className="container col-xl-10 col-xxl-8  py-5">
      <div className="row align-items-center g-lg-5 ">
        <CardList />
        <div
          className="container col-md-6 text-center text-lg-start m-2
       d-md-block d-lg-block d-xl-block d-none 
        ">
          <h1 className="display-4 fw-bold lh-1 mb-3">Add Crypto</h1>
          {/* <p className="col-10 fs-4">Below is an example form.</p> */}
          <br />
        </div>
        <div className="container col-md-6 mx-auto col-lg-5 mt-4">
          <form className="p-4 p-md-5 border rounded-3 bg-light" data-bitwarden-watching="1">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Wallet ID</span>
              <input placeholder={PUBLICKEY} disabled className="form-control" />
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Amount</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">PIN</label>
            </div>
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label">Payment Type</label>
              <select id="disabledSelect" className="form-select">
                <option>Cash</option>
                <option>Card</option>
                <option>Crypto</option>
              </select>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Submit, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
  )
}