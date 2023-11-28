import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext  } from 'react'

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0)

  return (
    <div className='bg-[#041cf1] font-bold p-2 rounded-2xl'>
      <span >Spent:₦{totalExpenses}</span>
    </div>
  )
} 

export default ExpenseTotal
