// Write your code here
// Write your code here
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {itemDetails, onClickDetele} = props
  const {id, title, amount, type} = itemDetails
  const onDelte = () => {
    onClickDetele(id)
  }
  return (
    <li className="tansaction-container">
      <div className="t-container">
        <p className="paragraph1">{title}</p>
        <p className="paragraph1">Rs {amount}</p>
        <p className="paragraph1">{type}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDelte}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
