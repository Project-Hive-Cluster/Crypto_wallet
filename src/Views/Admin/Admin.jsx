

import { useState } from 'react'
import axios from "axios";
import image from '../../Images/transfer.gif'
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`




export default function Admin() {
  // event.target.value
  const [masterKey, setMasterKey] = useState(true)
  const [blockInit, setBlockInit] = useState('')

  const handleKeyChange = () => {
    setMasterKey(!masterKey)
  }

  const handleBlockInit = () => {
    const options = {
      method: 'GET',
      url: api + '/spine/init',
    };
    
    axios.request(options).then(function (response) {
      setBlockInit(JSON.stringify(response.data));
    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
    <div className="w-100 col-xl-10 col-xxl-8 px-4 py-5" style={{ backgroundColor: '#000e' }}>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 m-3" style={{ color: '#09b372' }}>Admin</h1>
          {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}

        </div>
        <div className="col-md-12 mx-auto col-lg-8">
          <form className="p-5 p-md-5 border rounded-3 bg-light" data-bitwarden-watching="1">
            <p className="col-lg-10 fs-4 text-primary py-3">Database Status</p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Wallet ID</span>
              <input disabled className="form-control" />
            </div>

            <p className="col-lg-10 fs-4 ">Master Key</p>
            <div className="input-group  mb-3">
              <span className="input-group-text">
                <div className="form-check form-switch">
                  <input className="form-check-input" onClick={handleKeyChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Master Control</label>
                </div>
              </span>
              {/* <input type="text" className="form-control" aria-label="Sizing example input" /> */}
              {masterKey ?
                <button className="btn btn-outline-secondary" disabled type="button" >Initial Block Chain</button> :
                <button className="btn btn-outline-danger" type="button" onClick={handleBlockInit}>Initial Block Chain</button>}
            </div>
            {blockInit ?
              <div style={{ backgroundColor: '#ADD8E6' }} className="rounded  p-5">
                <p className="container text-break">{blockInit}</p>
              </div> : <></>}
            <div className="text-bg-danger rounded  p-5">
              <small className="">By enabling Master key you might damage the block.</small>
            </div>




            {/* <hr className="my-4" /> */}

          </form>
        </div>
      </div>
    </div>
  )
}