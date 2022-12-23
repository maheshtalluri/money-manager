// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteItem} = props
  const {name, number, transaction, id} = eachTransaction
  const onDeleteBtn = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      <p className="number">{number}</p>
      <p>{transaction}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteBtn}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
