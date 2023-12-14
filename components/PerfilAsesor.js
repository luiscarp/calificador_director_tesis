import React from 'react'

import Stars from './Stars'

import { useState, useEffect } from 'react';

import axios from 'axios';

function PerfilAsesor({ nombre, universidad, deptoFacultad, temaInv, especialidades, idAsesor }) {
  const [data,setData] = useState()
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(3);
  const [rating3, setRating3] = useState(4);
  const [rating4, setRating4] = useState(5);
  const [rating5, setRating5] = useState(2);
  const [rating6, setRating6] = useState(1);
  const [rating7, setRating7] = useState(5);
  const [promGeneral, setPromGeneral] = useState()

  useEffect(() => {
        
    fetchData();

}, [idAsesor]);

const fetchData = async () => {
    try {
        const response = await axios.get(`/api/calificacionesdb?id=${idAsesor}`);
        setData(response.data);

    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
};



  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
    // Aquí puedes agregar lógica adicional, como enviar el valor a un backend
  };

  var suma = 0

 

  return (

  
      <div className=' flex flex-col justify-center items-center'>
                {data && data.map((item) =>(
          <li key={item._id}>
            {item.comentario}

          </li>


        ))}

   
        <h1 className=' mt-6 font-bold text-2xl md:text-4xl text-center'>{nombre}</h1>
        <Stars  rating={rating1} isEdit={false}></Stars>
        <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Pertenece a: {universidad}</h1>
        <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>{nombre} es aprobado por un 70% de los votantes</h1>
        <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Forma parte del departamento/facultad de {deptoFacultad}</h1>
        <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Su principal linea de investigación es: {temaInv}</h1>
        <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Las tecnicas que se especializa son: {especialidades}</h1>

      
        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de problematico</h1>
        <Stars  rating={rating2} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Interés en los estudiantes</h1>
        <Stars  rating={rating3} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de conocimiento</h1>
        <Stars  rating={rating4} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de exigencia</h1>
        <Stars  rating={rating5} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Cantidad de recursos</h1>
        <Stars  rating={rating6} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Disponibilidad de tiempo</h1>
        <Stars  rating={rating7} isEdit={false}></Stars>

        
        


      </div >
      

 

  )
}

export default PerfilAsesor
