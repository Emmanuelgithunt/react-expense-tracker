import React from 'react'
import Budget from './Components/Budget'
import Remaining from './Components/Remaining'
import ExpenseTotal from './Components/ExpenseTotal'
import ExpenseList from './Components/ExpenseList'
import AddExpenseForm from './Components/AddExpenseForm'
import { AppProvider } from './Context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className='container relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
      <h1 className='mt-3 text-center font-bold text-[50px]'>Expense tracker</h1>
      <div className=' mt-3 grid grid-cols-3'>
        <div className=' columns-sm'>
          <Budget/>
        </div>
        <div className=' columns-sm'>
          <Remaining/>
        </div>
        <div className=' columns-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3 font-bold text-[20px]'>Expenses</h3>
      <div className='row mt-3'>
        <div className=' columns-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3 font-bold text-[20px]'>Add Expenses</h3>
      <div className='mt-3'>
        <div>
          <AddExpenseForm/>
        </div>
      </div>
      </div>
    </div>
    </AppProvider>
    
  )
}

export default App
