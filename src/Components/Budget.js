import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = () => {
  const {budget} = useContext(AppContext);

  return (
    <div className=' bg-[#745a5a] p-2 rounded-2xl font-bold flex'>
      <span>Budget:₦{budget}</span>
    </div>
  )
}

export default Budget
