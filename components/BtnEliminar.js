import React from 'react'

import axios from 'axios'

import { toast, Toaster } from 'react-hot-toast';

function BtnEliminar({llave, fetchData}) {



  const deleteUniversidad = async () => {
    try {
        const response = await axios.delete(`/api/universidaddb?id=${llave}`);
        console.log(response.data);

        await fetchData()

        toast.success("Datos eliminados con exito")

        
       
    } catch (error) {
        console.error("Hubo un error al eliminar la universidad:", error);
        // Manejo de errores
    }


  
}


  return (
    <div className='w-1/4' >

      <Toaster></Toaster>

      <button className=' bg-red-600 text-white font-bold text-md w-full px-2 py-1 text-center rounded-lg md:text-3xl' onClick={deleteUniversidad}>Eliminar</button>
      
    </div>
  )
}

export default BtnEliminar
