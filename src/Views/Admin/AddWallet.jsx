import image from "../../Images/addWallet.gif"


export default function AddWallet() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-2">
          <br />
          <h1 className="mb-3 mt-5">Add Wallet</h1>
          <img src={image} height="70%" />
        </div>

        <div className="col-6">
          <FormInput />
        </div>
      </div>
    </div>

  )
}

export function FormInput() {


  return (

    <>

      <div className="p-2 m-3">
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <label htmlFor="username" className="form-label">Name</label>
            <div className="col-sm-6">
              <div className="input-group">

                <span className="input-group-text">First</span>
                <input type="text" className="form-control" id="username" placeholder="Username" />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-text">Last</span>
                <input type="text" className="form-control" id="username" placeholder="Username" />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Password</label>
              <input type="text" className="form-control" id="address" />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country">
                <option value>Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
          <hr className="my-4" />



          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">Genarate Wallet Key</button>
        </form>

      </div></>)
}