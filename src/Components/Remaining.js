import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react';

const Remaining = () => {
  const { expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return(total = total + item.cost);
  }, 0);

  return (
    <div className='bg-[#f10404] p-2 rounded-2xl mx-10 font-bold'>
      <span>Remaining:₦{budget - totalExpenses}</span>
    </div>
  )
}

export default Remaining
