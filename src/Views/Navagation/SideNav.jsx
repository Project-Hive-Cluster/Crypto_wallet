
import logo from '../../../src/assets/react.svg' 



export default function SideNav() {
  return (
    <div style={{ padding:'2rem' }}>
     <HeroComponent/>
<div className="accordion">
  <input type="checkbox" id="reg" name="accordion-checkbox" hidden/>
  <label className="accordion-header" htmlFor="reg">
    <i className="icon icon-arrow-right mr-1"></i>
    User
  </label>
  <div className="accordion-body">
          {/* <!-- Accordions content --> */}
          <RegistationNav/>
  </div>
      </div>
      <div className="accordion">
  <input type="checkbox" id="trans" name="accordion-checkbox" hidden/>
  <label className="accordion-header" htmlFor="trans">
    <i className="icon icon-arrow-right mr-1"></i>
    Fund Management
  </label>
  <div className="accordion-body">
          {/* <!-- Accordions content --> */}
          <TransferNav/>
  </div>
</div>
      </div>
        )
}

export const HeroComponent = () => {
 
  return (
<div className="hero">
  <div className="hero-body">
    <img src={logo} className="p-centered" />
  
  </div>
</div>

)
}

export const RegistationNav = () => {
  return(<ul className="nav">
  <li className="nav-item">
    <a href="#">Register</a>
  </li>
  <li className="nav-item active">
    <a href="#">Profile</a>
    <ul className="nav">
      <li className="nav-item">
        <a href="#">Update</a>
      </li>
    </ul>
  </li>


</ul>)
}

export const TransferNav = () => {
  return(<ul className="nav">
  <li className="nav-item">
    <a href="#">Transfer</a>
  </li>
  <li className="nav-item active">
    <a href="#">Add Crypto</a>
    <ul className="nav">
      <li className="nav-item">
        <a href="#">Add Card</a>
      </li>
      <li className="nav-item">
        <a href="#">Deposit</a>
      </li>
    </ul>
  </li>
  <li className="nav-item">
    <a href="#">Withdrow</a>
  </li>
  <li className="nav-item">
    <a href="#">Report</a>
  </li>
</ul>)
}