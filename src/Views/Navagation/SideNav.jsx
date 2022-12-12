
import { Link } from 'react-router-dom'
import CryptoCard from '../Components/CryptoCard'


export default function SideNav() {
  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ transform: 'scaleX(0.8) scaleY(0.8)', marginLeft: '-60px' }}>
        <CryptoCard />
      </div>
      <br />
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Profile
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <RegistationNav />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Transaction
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <TransferNav />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Admin
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <AdminrNav />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export const HeroComponent = () => {

  return (

    <div className="px-4 py-5 text-center">
      <img className="d-block mx-auto" src={logo} alt="" width="72" height="57" />
      <div className="col-lg-6 mx-auto">
      </div>
    </div>


  )
}

export const RegistationNav = () => {
  return (
    <nav className="nav flex-column">

      <Link className="nav-link" to={'/'}>Dashboard</Link>
      <Link className="nav-link" href="#">Statment</Link>
    </nav>
  )
}

export const TransferNav = () => {
  return (<nav className="nav flex-column">
    <Link className="nav-link" to={'/AddCrypto'}>Add Crypto</Link>
    <Link className="nav-link" to={'/Transfer'}>Transfer</Link>
    <Link className="nav-link" to={'/Report'}>Report</Link>

  </nav>)
}
export const AdminrNav = () => {
  return (<nav className="nav flex-column">
    <Link className="nav-link" to={'/AddWallet'}>Add Wallet</Link>
    <Link className="nav-link" to={'/Block'}>View Block</Link>

  </nav>)
}