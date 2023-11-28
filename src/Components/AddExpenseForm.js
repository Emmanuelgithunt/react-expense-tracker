import React, { useContext } from 'react' 
import { useState } from 'react'
import { AppContext } from '../Context/AppContext';
import {v4 as uuidv4} from 'uuid'

const AddExpenseForm = () => {
  const {dispatch} =useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='grid grid-cols-2'>
            <div className='grid'>
                <label for='name' className=' font-bold'>Name</label>
                <input required='required' type='text' className=' border-2 border-black mr-2' id='name'
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className=' grid'>
                <label for='cost' className=' font-bold'>Cost</label>
                <input required='required' type='text' className=' border-2 border-black ml-2' id='cost'
                value={cost}
                onChange={(event) => setCost(event.target.value)}/>
            </div>
            <div className=' columns-sm'>
                <button type='submit' className=' bg-black rounded-2xl text-white my-3 p-2'>Save</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddExpenseForm
