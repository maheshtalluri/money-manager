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
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionHistoryList: [],
  }

  deleteItem = id => {
    const {transactionHistoryList} = this.state
    const filteredList = transactionHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({transactionHistoryList: filteredList})
  }

  addTransactionList = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = optionType
    const newTransaction = {
      id: v4(),
      name: title,
      number: parseInt(amount),
      transaction: displayText,
    }
    this.setState(prevState => ({
      transactionHistoryList: [
        ...prevState.transactionHistoryList,
        newTransaction,
      ],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncomeAmount = () => {
    const {transactionHistoryList} = this.state

    let incomeAmount = 0

    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.number
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionHistoryList} = this.state

    let expensesAmount = 0

    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.number
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionHistoryList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[0].deleteItem
      ) {
        incomeAmount += eachTransaction.number
      } else {
        expensesAmount += eachTransaction.number
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onSelect = event => {
    this.setState({optionId: event.target.value})
  }

  getIncomeAmount = () => {
    const {transactionHistoryList} = this.state

    let incomeAmount = 0

    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.number
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionHistoryList} = this.state

    let expensesAmount = 0

    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.number
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionHistoryList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionHistoryList.forEach(eachTransaction => {
      if (
        eachTransaction.transaction === transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.number
      } else {
        expensesAmount += eachTransaction.number
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    console.log(incomeAmount, expensesAmount)

    return balanceAmount
  }

  render() {
    const {title, optionId, amount, transactionHistoryList} = this.state
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    const balanceAmount = this.getBalanceAmount()

    return (
      <div className="bg-container">
        <div>
          <div className="profile-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="paragraph">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
        </div>
        <MoneyDetails
          balance={balanceAmount}
          income={incomeAmount}
          expenses={expensesAmount}
        />
        <div className="bottom-section">
          <div>
            <form onSubmit={this.addTransactionList}>
              <div className="transaction-container">
                <h1 className="add-transaction">Add Transaction</h1>
                <div className="text-container">
                  <label className="label-title" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    className="input-title"
                    type="text"
                    id="title"
                    placeholder="TITLE"
                    onChange={this.onTitleInput}
                    value={title}
                  />
                </div>
                <div className="text-container">
                  <label className="label-title" htmlFor="title">
                    AMOUNT
                  </label>
                  <input
                    className="input-title"
                    type="text"
                    id="title"
                    placeholder="AMOUNT"
                    value={amount}
                    onChange={this.onAmountInput}
                  />
                </div>
                <div className="text-container">
                  <label className="label-title" htmlFor="type">
                    TYPE
                  </label>
                  <select
                    id="type"
                    className="input-title"
                    onChange={this.onSelect}
                    value={optionId}
                  >
                    {transactionTypeOptions.map(eachTransaction => (
                      <option
                        value={eachTransaction.optionId}
                        key={eachTransaction.optionId}
                      >
                        {eachTransaction.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-transaction">History</h1>
            <div className="table">
              <p className="table-element">Title</p>
              <p className="table-element1">Amount</p>
              <p className="table-element">Type</p>
            </div>
            <ul className="list-container">
              {transactionHistoryList.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  key={eachTransaction.id}
                  deleteItem={this.deleteItem}
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
