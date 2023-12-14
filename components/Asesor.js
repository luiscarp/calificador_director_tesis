import React from 'react'

import { useState } from 'react'

import { useSession } from 'next-auth/react'

import BtnEditarAsesor from './BtnEditarAsesor'

import BtnEliminarAsesor from './BtnEliminarAsesor'

import BtnEditar from './BtnEditar'

import FormAsesor from './FormAsesor'

import Link from 'next/link'


function Asesor({ fetchData, asesor }) {
    const [showEdit, setShowEdit] = useState(false)
    const { data: session, status } = useSession()


    return (
        <div className=' flex flex-col justify-start items-center my-6 md:my-14' >
            <h1 className=' font-bold text-center text-lg md:text-4xl'>Nombre: {asesor.nombre}</h1>
            <h1 className='  text-center text-lg  md:text-4xl'>Pertenece al departamento o facultad: {asesor.deptoFacultad}</h1>

            <Link href={`/asesores/${asesor._id}/calificaciones`} className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-1 rounded-md shadow-black shadow w-2/3 font-bold text-md my-4 md:text-3xl text-center ' >Ver calificación</Link>

            <div className=' flex flex-col w-full'>

                {(!showEdit && status === "authenticated" && session.user.roles.includes("admin")) && (
                    <div className=' flex flex-row w-full justify-evenly '>





                        <BtnEditar setShowEdit={setShowEdit}></BtnEditar>

                        <BtnEliminarAsesor llave={asesor._id} fetchData={fetchData}></BtnEliminarAsesor>



                    </div>

                )}

                {showEdit && (
                    <FormAsesor setShowEdit={setShowEdit} llave={asesor._id} fetchData={fetchData} nombrei={asesor.nombre} temaInvi={asesor.temaInv} especialidadesi={asesor.especialidades} deptoFacultadi={asesor.deptoFacultad} ></FormAsesor>
                )}

            </div>




        </div>
    )
}

export default Asesor
