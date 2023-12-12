import React from 'react'

import axios from 'axios'

function BtnEliminar({llave, fetchData}) {

  const handleShowId = () => {

    console.log(llave)
  }

  const deleteUniversidad = async () => {
    try {
        const response = await axios.delete(`https://calificador-director-tesis.vercel.app/api/universidaddb?id=${llave}`);
        console.log(response.data);

        await fetchData()
       
    } catch (error) {
        console.error("Hubo un error al eliminar la universidad:", error);
        // Manejo de errores
    }


  
}


  return (
    <div className='w-1/4' >

      <button className=' bg-red-600 text-white font-bold text-md w-full px-2 py-1 text-center rounded-lg' onClick={deleteUniversidad}>Eliminar</button>
      
    </div>
  )
}

export default BtnEliminar
