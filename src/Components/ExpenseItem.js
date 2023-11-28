import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
  
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }
  
  return (
    <div className=' flex flex-row bg-white rounded shadow-2xl p-1'>
      <li className=' font-bold'>
        {props.name}:
      </li>
      <div>
        <span className=' pl-1 font-semibold'>
            ₦{props.cost}
        </span>
        <span className=' p-1'>
        <button onClick={handleDelete} className=' bg-black rounded-2xl text-white px-2'>Delete</button>
        </span>
        
      </div>
    </div>
  )
}

export default ExpenseItem
