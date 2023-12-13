import React from 'react'

import { useSession } from 'next-auth/react';


import Universidad from './Universidad'

import { useState, useEffect } from 'react'


import { Toaster, toast } from 'react-hot-toast';

import axios from 'axios'

function ListaUniversidades() {

  const { data: session, status } = useSession()


  const [data, setData] = useState(null);

  const [desplegar, setDesplegar] = useState(false)

  const [nombre, setNombre] = useState("")

  const [ubi, setUbi] = useState("")





  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/universidaddb');
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  };

  const handleShowAgregar = () => {
    setDesplegar(true);
  };

  const handleHideAgregar = () => {
    setDesplegar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Para evitar que la página se recargue al enviar el formulario

    // Aquí podrías hacer algo con los valores de nombre y ubi, como enviarlos a una API

    setDesplegar(false); // Establece desplegar como false

    console.log(nombre)

    console.log(ubi)

    try {
      // Enviar datos a "/api/testmongodb" mediante una solicitud POST con Axios
      const response = await axios.post('/api/universidaddb', {
        nombre, // nombre: nombre
        ubi, // ubi: ubi
      });

      // Manejar la respuesta
      console.log('Datos enviados con éxito:', response.data);

      await fetchData();

      toast.success("Datos enviados con éxito")


    }

    catch (error) {
      // Manejar errores en la solicitud
      console.error('Error en la solicitud:', error);
    }





  };



  return (
    <div className=' flex flex-col w-full items-center'>
      <Toaster></Toaster>
      <h1 className=' font-bold text-xl text-center my-2 md:text-6xl mb-3'> Lista de universidades</h1>
      {desplegar && (
        <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl" onClick={handleHideAgregar} >Cerrar dialogo</button>

      )}
      {(!desplegar && status == "authenticated") && (
        <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl mb-5" onClick={handleShowAgregar} >Agregar Universidad</button>

      )}


      {desplegar && (
        <form className=' flex flex-col my-4' onSubmit={handleSubmit}>
          <div className='flex flex-col my-2'>
            <label className=' font-bold text-xl' htmlFor="nombre">Ingrese nombre universidad:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              placeholder='Nombre de universidad'
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='flex flex-col my-2'>
            <label className=' font-bold text-xl' htmlFor="ubi">Ingrese ciudad ubicación:</label>
            <input
              type="text"
              id="ubi"
              value={ubi}
              placeholder='ubicacion universidad'
              onChange={(e) => setUbi(e.target.value)}
            />
          </div>
          <button className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-2xl ' type="submit">Enviar</button>
          
        </form>
      )}
      <ul>
        {data && data.map((item) => (
          <li key={item._id}>
            <Universidad universidad={item} fetchData={fetchData} />

          </li>


        ))}

      </ul>




    </div>
  )
}

export default ListaUniversidades
