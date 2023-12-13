import React from 'react'

function Asesor({ fetchData, asesor }) {
    return (
        <div className=' flex flex-col justify-start items-center my-6 md:my-14' >
            <h1 className=' font-bold text-center text-lg md:text-4xl'>Nombre: {asesor.nombre}</h1>
            <h1 className='  text-center text-lg  md:text-4xl'>Pertenece al departamento o facultad: {asesor.deptoFacultad}</h1>




        </div>
    )
}

export default Asesor
