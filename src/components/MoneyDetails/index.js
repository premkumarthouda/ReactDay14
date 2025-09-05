// Write your code here
import './index.css'

const MoneyDetails = () => {
  return (
    <div className="card-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="price-img"
          alt="balance"
        />
        <div className="ruppes">
          <p className="user-balance">Your Balance</p>
          <p className="paragraph">RS 0</p>
        </div>
      </div>
      <div className="Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="price-img"
          alt="balance"
        />
        <div className="ruppes">
          <p className="user-balance">Your Income</p>
          <p className="paragraph">RS 0</p>
        </div>
      </div>
      <div className="Expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="price-img"
          alt="balance"
        />
        <div className="ruppes">
          <p className="user-balance">Your Expenses</p>
          <p className="paragraph">RS 0</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
