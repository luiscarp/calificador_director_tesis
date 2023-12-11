import React from 'react'

import { useState } from 'react'

function Universidad({universidad}) {
   
  

  return (
    <div className=' flex flex-col justify-start items-center my-2'>
        <h1 className=' font-bold text-center text-lg'>Nombre: {universidad.nombre}</h1>
        <h1 className='  text-center text-lg'>Ubicación: {universidad.ubi}</h1>
      
    </div>
  )
}

export default Universidad
