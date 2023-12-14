import React from 'react'

function PerfilAsesor({nombre, universidad, deptoFacultad, temaInv, especialidades}) {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className=' my-3 font-bold text-2xl md:text-4xl text-center'>{nombre}</h1>
      <h1 className=' my-3 font-semibold text-2xl md:text-4xl text-center'>Pertenece a {universidad}</h1>
      <h1 className=' my-3 font-semibold text-2xl md:text-4xl text-center'>Forma parte del departamento/facultad de {deptoFacultad}</h1>
      <h1 className=' my-3 font-semibold text-2xl md:text-4xl text-center'>Su principal linea de investigación es {temaInv}</h1>
      <h1 className=' my-3 font-semibold text-2xl md:text-4xl text-center'>Las tecnicas que se especializa son {especialidades}</h1>
    </div>
  )
}

export default PerfilAsesor
