
import { useState } from 'react'
import image from '../../Images/transfer.gif'



export default function Admin() {
  // event.target.value
  const [masterKey, setMasterKey] = useState(true)



  return (
    <div className="w-100 col-xl-10 col-xxl-8 px-4 py-5" style={{ backgroundColor: '#000e' }}>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 m-3" style={{ color: '#09b372' }}>Admin</h1>
          {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}

        </div>
        <div className="col-md-12 mx-auto col-lg-8">
          <form className="p-4 p-md-5 border rounded-3 bg-light" data-bitwarden-watching="1">
            <p className="col-lg-10 fs-4">Database Status</p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Wallet ID</span>
              <input disabled className="form-control" />
            </div>

            <p className="col-lg-10 fs-4 ">Master Key</p>
            <div class="input-group  mb-3">
              <span class="input-group-text">
                <div class="form-check form-switch">
                  <input class="form-check-input" onClick={setMasterKey(!masterKey)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">Master Control</label>
                </div>
              </span>
              {/* <input type="text" class="form-control" aria-label="Sizing example input" /> */}
              <button class="btn btn-outline-secondary" {...masterKey ? 'disabled' : ""} type="button">Initial Block Chain</button>
            </div>


            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">PIN</label>
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