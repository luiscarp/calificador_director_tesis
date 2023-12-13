import React from 'react'

import { useRouter } from 'next/router'

function calificacion() {
    const router = useRouter();
    // Obtener el ID de la universidad de la URL


    const { id } = router.query;
    
  return (
    <div>
      <h1>Aqui iran las calificaciones de cada asesor seleccionado</h1>
    </div>
  )
}

export default calificacion
