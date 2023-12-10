import React from 'react'

import NavBar from '@/components/NavBar';

import SearchBox from '@/components/SearchBox';

import axios from 'axios';

import toast from 'react-hot-toast';

import { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react';

function dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/universidaddb');
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

   // Estado para controlar si se muestran los datos o no
   const [showData, setShowData] = useState(false);

   // Manejador para el botón de mostrar datos
   const handleShowData = () => {
     setShowData(true);
   };

   const handleShowDataF = () => {
    setShowData(false);
  };
 


  


  return (
    <div className=" h-screen bg-[url('/fondodash.png')]  bg-cover bg-center ">
       <NavBar></NavBar>
       <h1 className=' text-center font-bold text-black text-xl my-2'> Inicia buscando tu universidad o tu director de tesis </h1>
       <SearchBox></SearchBox>
  
       <div>
      <button className=" bg-blue-500 text-white" onClick={handleShowData}>Mostrar Universidades</button>

      {showData && (
        <ul>
          {data.map(item => (
            <li key={item._id}>{item.nombre}</li>
          ))}
          <button className=" bg-blue-500 text-white" onClick={handleShowDataF}>Ocultar Universidades</button>
        </ul>
        
      )}
    </div>
    </div>
  )
}

export default dashboard
