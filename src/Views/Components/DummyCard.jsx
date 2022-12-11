import "../../Styles/Dummy_Card.css"
import snow from "../.././Images/snowflake-snow-svgrepo-com.svg"
import chip from "../.././Images/chip.png"

export default function DummyCard() {


  return (
    <div className="card-group">
      <div className="card">
        <div className="logo">
          <img src={snow} alt="Visa" />
          {/* <h1 className="brand_titel">Crypto</h1> */}
        </div>
        <div className="chip"><img src={chip} alt="chip" /></div>
        <div className="number">1234 5678 9012 3456</div>
        <div className="name">Gandalf Gray</div>
        <div className="from">From 09/22</div>
        <div className="to">To 09/27</div>
        <div className="ring"></div>
      </div>
    </div>
  )
}

