




export default function FundTransfer({ PUBLICKEY = "hntry5by7nu56uw4enue46nu46eu" }) {


  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Crypto Transfer</h1>
          <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light" data-bitwarden-watching="1">
            <p className="col-lg-10 fs-4">Sender</p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Wallet ID</span>
              <input placeholder={PUBLICKEY} disabled className="form-control" />
            </div>

            <p className="col-lg-10 fs-4 ">Reciver</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput"
                placeholder="000000000000000" />
              <label for="floatingInput">Account Number</label>
            </div>
            <div className="form-floating mb-3">
              <input type="Text" className="form-control" id="floatingInput" />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" />
              <label for="floatingInput">Amount</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">PIN</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
  )
}