import React from 'react'

import { useRouter } from 'next/router'

function Calificaciones() {
    const router = useRouter();
    // Obtener el ID de la universidad de la URL


    const { id } = router.query;
  return (
    <div>
      <h1>Aqui van las calis {id}</h1>
    </div>
  )
}

export default Calificaciones
