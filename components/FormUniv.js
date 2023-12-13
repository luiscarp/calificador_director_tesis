import React from 'react'

import { useState } from 'react'

import axios from 'axios'

import {toast, Toaster} from 'react-hot-toast'


function FormUniv({ setShowEdit, nombrei, ubii, llave, fetchData }) {

    const [nombre, setNombre] = useState(nombrei)

    const [ubi, setUbi] = useState(ubii)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Para evitar que la página se recargue al enviar el formulario
        try {
            const response = await axios.put(`/api/universidaddb?id=${llave}`, {
                nombre: nombre,
                ubi: ubi
            });
          
            toast.success("Datos modificados con exito")
           
        } catch (error) {
         
            alert('Error al actualizar la universidad');
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
                    <label className=' font-bold text-lg md:text-3xl' htmlFor="ubi">Ubicación actualizada:</label>
                    <input
                        type="text"
                        id="ubi"
                        value={ubi}
                        placeholder='ubicacion universidad'
                        onChange={(e) => setUbi(e.target.value)}
                    />
                </div>
                <button className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-1 rounded-md shadow-black shadow w-2/3 font-bold text-md md:text-2xl ' type="submit">Actualizar</button>
            </form>
        </div>
    )
}

export default FormUniv
