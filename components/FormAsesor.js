import React from 'react'

import { useState } from 'react'

import { Toaster, toast } from 'react-hot-toast'

import axios from 'axios'

function FormAsesor({setShowEdit, llave, fetchData, nombrei, temaInvi, especialidadesi, deptoFacultadi}) {
  const[nombre, setNombre] = useState(nombrei)

  const[temaInv, setTemaInv] = useState(temaInvi)

  const[especialidades, setEspecialidades] = useState(especialidadesi)

  const[deptoFacultad, setDeptoFacultad] = useState(deptoFacultadi)
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Para evitar que la página se recargue al enviar el formulario
    try {
        const response = await axios.put(`/api/asesordb?id=${llave}`, {
            nombre: nombre,
            temaInv: temaInv,
            especialidades: especialidades,
            deptoFacultad: deptoFacultad

        });
   
        toast.success("Datos modificados con exito")
       
    } catch (error) {
     
        alert('Error al actualizar al asesor');
    }

    fetchData()

    
    
    setShowEdit(false)
}
    return (
        <div className=' w-full'>
            <Toaster></Toaster>
            <form className=' flex flex-col my-4' onSubmit={handleSubmit}>
                <div className='flex flex-col my-2 mx-3'>
                    <label className=' font-bold text-lg md:text-3xl' htmlFor="nombre">Nombre actualizado:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        placeholder='Nombre de universidad'
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='flex flex-col my-2 mx-3'>
                    <label className=' font-bold text-lg md:text-3xl' htmlFor="ubi">Tema investigacion:</label>
                    <input
                        type="text"
                        id="temaInv"
                        value={temaInv}
                        placeholder='Tema Investigacion'
                        onChange={(e) => setTemaInv(e.target.value)}
                    />
                </div>
                <div className='flex flex-col my-2 mx-3'>
                    <label className=' font-bold text-lg md:text-3xl' htmlFor="ubi">Especialidades</label>
                    <input
                        type="text"
                        id="especialidades"
                        value={especialidades}
                        placeholder='Especialidades'
                        onChange={(e) => setEspecialidades(e.target.value)}
                    />
                </div>
                <div className='flex flex-col my-2 mx-3'>
                    <label className=' font-bold text-lg md:text-3xl' htmlFor="ubi">Especialidades</label>
                    <input
                        type="text"
                        id="deptoFacultad"
                        value={deptoFacultad}
                        placeholder='Departamento o facultad'
                        onChange={(e) => setDeptoFacultad(e.target.value)}
                    />
                </div>
                <button className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-1 rounded-md shadow-black shadow w-2/3 font-bold text-md md:text-2xl ' type="submit">Actualizar</button>
            </form>
        </div>
  )
}

export default FormAsesor
