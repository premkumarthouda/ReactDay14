import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
    transactionList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeInputTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeInputType = event => {
    this.setState({typeInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    if (amountInput !== '' && titleInput !== '') {
      const newTransaction = {
        id: v4(),
        title: titleInput,
        amount: parseInt(amountInput),
        type: transactionTypeOptions.find(
          eachItem => eachItem.optionId === typeInput,
        ).displayText,
      }
      if (typeInput === 'INCOME') {
        this.setState(prevSate => ({
          balance: prevSate.balance + parseInt(amountInput),
          income: prevSate.income + parseInt(amountInput),
        }))
      } else {
        this.setState(prevSate => ({
          balance: prevSate.balance - parseInt(amountInput),
          expenses: prevSate.expenses + parseInt(amountInput),
        }))
      }
      this.setState(prevSate => ({
        transactionList: [...prevSate.transactionList, newTransaction],
        titleInput: '',
        amountInput: '',
        typeInput: 'INCOME',
      }))
    }
  }

  onClickDetele = id => {
    this.setState(prevState => {
      const filteredList = prevState.transactionList.filter(
        eachItem => eachItem.id !== id,
      )
      const deletedTransaction = prevState.transactionList.find(
        eachItem => eachItem.id === id,
      )
      if (!deletedTransaction) return {}

      if (deletedTransaction.type === 'INCOME') {
        return {
          transactionList: filteredList,
          balance: prevState.balance - deletedTransaction.amount,
          income: prevState.income - deletedTransaction.amount,
        }
      } else {
        return {
          transactionList: filteredList,
          balance: prevState.balance + deletedTransaction.amount,
          expenses: prevState.expenses - deletedTransaction.amount,
        }
      }
    })
  }

  render() {
    const {
      titleInput,
      amountInput,
      typeInput,
      balance,
      income,
      expenses,
      transactionList,
    } = this.state

    return (
      <div className="main-container">
        <div className="mini-container">
          <h1 className="greetion">Hi, Richard</h1>
          <p className="message">
            Welcome back to your<a className="special"> Money Manager</a>
          </p>
        </div>
        <div className="Balance">
          <MoneyDetails BALANCE={balance} INCOME={income} EXPENSES={expenses} />
        </div>
        <div className="forms">
          <h1 className="heading">Add Transaction</h1>
          <form className="formInput" onSubmit={this.onClickAdd}>
            <label htmlFor="TITLE" className="label">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE"
              className="input"
              id="TITLE"
              onChange={this.onChangeInputTitle}
              value={titleInput}
            />
            <label htmlFor="AMOUNT" className="label">
              AMOUNT
            </label>
            <input
              type="text"
              placeholder="AMOUNT"
              id="AMOUNT"
              className="input"
              onChange={this.onChangeInputAmount}
              value={amountInput}
            />
            <label htmlFor="select" className="label">
              TYPE
            </label>
            <select
              id="select"
              className="type"
              onChange={this.onChangeInputType}
              value={typeInput}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button className="btn-add" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="last-container">
          <h1 className="heading">History</h1>
          <div className="history-container">
            <div className="headings">
              <p className="item-heading">Title</p>
              <p className="item-heading">Amount</p>
              <p className="item-heading">Type</p>
            </div>
          </div>
          <div className="history-container-1">
            <ul className="unordered-items">
              {transactionList.map(eachItem => (
                <TransactionItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onClickDetele={this.onClickDetele}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
