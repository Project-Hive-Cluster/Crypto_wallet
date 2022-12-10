




export default function FundTransfer({ PUBLICKEY = "hntry5by7nu56uw4enue46nu46eu" }) {


  return (
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Crypto Transfer</h1>
          <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-light" data-bitwarden-watching="1">
            <p class="col-lg-10 fs-4">Sender</p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Wallet ID</span>
              <input placeholder={PUBLICKEY} disabled class="form-control" />
            </div>

            <p class="col-lg-10 fs-4 ">Reciver</p>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput"
                placeholder="000000000000000" />
              <label for="floatingInput">Account Number</label>
            </div>
            <div class="form-floating mb-3">
              <input type="Text" class="form-control" id="floatingInput" />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="number" class="form-control" id="floatingInput" />
              <label for="floatingInput">Amount</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">PIN</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Send</button>
            <hr class="my-4" />
            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
  )
}