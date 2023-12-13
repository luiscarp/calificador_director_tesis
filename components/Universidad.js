import React from 'react'

import { useState, useEffect } from 'react'

import BtnEliminar from './BtnEliminar';

import { useSession } from 'next-auth/react';
import BtnEditar from './BtnEditar';



import FormUniv from './FormUniv';

import Link from 'next/link';


function Universidad({ universidad, fetchData }) {
  const [showEdit, setShowEdit] = useState(false)




  const { data: session, status } = useSession()








  return (
    <div className=' flex flex-col justify-start items-center my-6 md:my-14' >
      <h1 className=' font-bold text-center text-lg md:text-4xl'>Nombre: {universidad.nombre}</h1>
      <h1 className='  text-center text-lg  md:text-4xl'>Ubicación: {universidad.ubi}</h1>

      <Link href={`/universidad/${universidad._id}/asesores`} className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-1 rounded-md shadow-black shadow w-2/3 font-bold text-md my-4 md:text-3xl text-center ' type="submit">Ver Asesores de tesis</Link>


      <div className=' flex flex-col w-full'>

        {( !showEdit && status==="authenticated" && session.user.roles.includes("admin") ) && ( 
          <div className=' flex flex-row w-full justify-evenly '>



            <BtnEditar setShowEdit={setShowEdit}></BtnEditar>

            <BtnEliminar llave={universidad._id} fetchData={fetchData}></BtnEliminar>



          </div>

        )}

        {showEdit && (
          <FormUniv setShowEdit={setShowEdit} llave={universidad._id} fetchData={fetchData} nombrei={universidad.nombre} ubii={universidad.ubi}></FormUniv>
        )}

      </div>


    </div>
  )
}

export default Universidad
