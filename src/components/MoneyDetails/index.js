// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="details">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-size"
        />
        <div>
          <p className="balance-word">Your Balance</p>
          <p className="amount" testid="balanceAmount">{`RS ${balance}`}</p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-size"
        />
        <div>
          <p className="balance-word">Your Income</p>
          <p className="amount" testid="incomeAmount">{`RS ${income}`}</p>
        </div>
      </div>
      <div className="expenses-card ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-size"
        />
        <div>
          <p className="balance-word">Your Expenses</p>
          <p className="amount" testid="expensesAmount">{`RS ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
