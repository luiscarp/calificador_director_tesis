import React from 'react'

import axios from 'axios';

import { Toaster, toast } from 'react-hot-toast';

function EliminarComentario({llave, fetchData}) {

    const deleteComentario = async () => {
        try {
            const response = await axios.delete(`/api/calificacionesdb?id=${llave}`);
            console.log(response.data);
    
            await fetchData()

            toast.success("Asesor eliminado con exito")
           
        } catch (error) {
            console.error("Hubo un error al eliminar al asesor:", error);
            // Manejo de errores
        }
    
    
      
    }

  return (
    <div className='w-1/4 mx-auto' >

      <Toaster></Toaster>

      <button className=' bg-red-600 text-white font-bold text-md w-full px-2 py-1 text-center rounded-lg md:text-3xl' onClick={deleteComentario}>Eliminar</button>
      
    </div>
  )
}

export default EliminarComentario
