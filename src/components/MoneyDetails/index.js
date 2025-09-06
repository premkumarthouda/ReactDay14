// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {BALANCE, INCOME, EXPENSES} = props
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
          <p className="paragraph" data-testid="balanceAmount">
            RS {BALANCE}
          </p>
        </div>
      </div>
      <div className="Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="price-img"
          alt="income"
        />
        <div className="ruppes">
          <p className="user-balance">Your Income</p>
          <p className="paragraph" data-testid="incomeAmount">
            RS {INCOME}
          </p>
        </div>
      </div>
      <div className="Expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="price-img"
          alt="expenses"
        />
        <div className="ruppes">
          <p className="user-balance">Your Expenses</p>
          <p className="paragraph" data-testid="expensesAmount">
            RS {EXPENSES}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
