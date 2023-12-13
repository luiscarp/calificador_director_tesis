import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';

import axios from 'axios';

import NavBar from '@/components/NavBar';

import HeaderAsesor from '@/components/HeaderAsesor';

import ListaAsesores from '@/components/ListaAsesores';

function calificacion() {
    const router = useRouter();
    // Obtener el ID de la universidad de la URL


    const { id } = router.query;
    
  return (
    <div>
      <h1>Aqui iran las calificaciones de cada asesor seleccionado {id}</h1>
    </div>
  )
}

export default calificacion
