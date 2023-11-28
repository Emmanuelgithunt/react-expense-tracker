import React from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'

const ExpenseList = () => {
  const {expenses} = useContext(AppContext);
  return (
    <div>
      <ul>
        {expenses.map((expense) => (
            <ExpenseItem 
            id={expense.id}
            name={expense.name}
            cost={expense.cost}/>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
