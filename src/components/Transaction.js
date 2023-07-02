import React from 'react'

export const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className="minus">
          {transaction.text} <span>-Ksh400</span>
          <button class="delete-btn">x</button>
        </li>
  )
}

export default Transaction