import React from 'react'

import { useRouter } from 'next/router'

import { useState } from 'react';

import { useSession } from 'next-auth/react';

import { useEffect } from 'react';

import Footer from '@/components/Footer';

import axios from 'axios';

import NavBar from '@/components/NavBar';
import PerfilAsesor from '@/components/PerfilAsesor';

function Calificaciones() {
  const router = useRouter();
  // Obtener el ID de la universidad de la URL


  const { id } = router.query;
  const [data, setData] = useState(null);

  const { data: session, status } = useSession()


  useEffect(() => {

      const fetchData = async () => {

          try {
              const response = await axios.get(`/api/selectedasesordb?id=${id}`);
              setData(response.data);
              
          } catch (error) {
              console.error('Error al obtener los datos', error);
          }
      };

      if (id) {
          fetchData();
          
      }
  }, [id]); // Este useEffect se ejecutará cada vez que el valor de 'id' cambie






  return (
    <div className="  bg-[url('/calificaciones.png')]  bg-cover bg-center bg-repeat-y">
      <NavBar></NavBar>

      { data && (
        <PerfilAsesor idAsesor = {data._id} nombre = {data.nombre} universidad={data.universidad} deptoFacultad={data.deptoFacultad} temaInv={data.temaInv} especialidades={data.especialidades} ></PerfilAsesor>


      )}

      <Footer></Footer>
    </div>
  )
}

export default Calificaciones
