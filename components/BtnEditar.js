import React from 'react'

import { useState } from 'react'

function BtnEditar({ setShowEdit }) {
  

  const [nombre, setNombre] = useState()

  const [ubi, setUbi] = useState()

  const handleShowEdit = () => {
    setShowEdit(true)

  }




  return (
    <div className='w-1/4'>
      <div className='w-full '>

        <button className=' bg-blue-500 text-white font-bold text-md w-full px-2 py-1 text-center rounded-lg md:text-3xl' onClick={handleShowEdit}>Editar</button>

      </div>



    </div>
  )
}

export default BtnEditar
