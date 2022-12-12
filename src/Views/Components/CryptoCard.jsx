import "../../Styles/CryptoCard.css"
import moment from "moment"
import snow from "../.././Images/snowflake-snow-svgrepo-com.svg"
import chip from "../.././Images/chip.png"


export default function CryptoCard({ cardno = '1234567890123456', f_name = 'Gandalf', l_name = 'Gray', from = '09/22' }) {


  return (
    <div className="myCard-group">
      <div className="myCard">
        <div className="logo">
          <img src={snow} alt="Visa" />
          {/* <h1 className="brand_titel">Crypto</h1> */}
        </div>
        <div className="chip"><img src={chip} alt="chip" /></div>
        <div className="number">{cardno.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4")}</div>
        <div className="name text-uppercase">{f_name} {l_name}</div>
        <div className="from">From {moment(from).format('MM/Y')}</div>
        {/* <div className="to">To 09/27</div> */}
        <div className="ring"></div>
      </div>
    </div>
  )
}

