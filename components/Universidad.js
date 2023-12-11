import React from 'react'

import { useState } from 'react'

import BtnEliminar from './BtnEliminar';

import { useSession } from 'next-auth/react';
import BtnEditar from './BtnEditar';

function Universidad({universidad, fetchData}) {

  const{data: session} = useSession()






  return (
    <div className=' flex flex-col justify-start items-center my-2'>
        <h1 className=' font-bold text-center text-lg'>Nombre: {universidad.nombre}</h1>
        <h1 className='  text-center text-lg'>Ubicación: {universidad.ubi}</h1>
        <h1 className='  text-center text-lg'>Ubicación: {universidad._id}</h1>
        <div className=' flex flex-row w-full justify-between '>

          <BtnEditar ></BtnEditar>

          <BtnEliminar llave={universidad._id} fetchData = {fetchData}></BtnEliminar>



        </div>
      
    </div>
  )
}

export default Universidad
