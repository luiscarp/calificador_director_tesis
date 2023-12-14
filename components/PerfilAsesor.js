import React from 'react'

import Stars from './Stars'

import { useState, useEffect } from 'react';

import axios from 'axios';

import Comentario from './Comentario';

function PerfilAsesor({ nombre, universidad, deptoFacultad, temaInv, especialidades, idAsesor }) {
  const [data, setData] = useState()
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [rating7, setRating7] = useState(0);
  const [promGeneral, setPromGeneral] = useState()

  useEffect(() => {

    fetchData();

  }, [idAsesor]);

  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
    // Aquí puedes agregar lógica adicional, como enviar el valor a un backend
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/calificacionesdb?id=${idAsesor}`);
      setData(response.data);

      const calcularPromedio = (campo) => {
        const suma = response.data.reduce((acum, item) => acum + item[campo], 0);
        return response.data.length > 0 ? Math.round(suma / response.data.length) : 0;
      };

      if (response.data.length > 0) {
        setRating1(calcularPromedio('general'));
        setRating2(calcularPromedio('problematico'));
        setRating3(calcularPromedio('interes'));
        setRating4(calcularPromedio('conocimiento'));
        setRating5(calcularPromedio('exigencia'));
        setRating6(calcularPromedio('recursos'));
        setRating7(calcularPromedio('disponibilidad'));
      } else {
        setPromGeneral(0);
        setRating2(0);
        setRating3(0);
        setRating4(0);
        setRating5(0);
        setRating6(0);
        setRating7(0);
      }
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  };










  return (


    <div className=' flex flex-col justify-center items-center'>


      <h1 className=' mt-6 font-bold text-2xl md:text-4xl text-center'>{nombre}</h1>

      <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Pertenece a: {universidad}</h1>

      {data && (
        <>
          <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Calificacion general</h1>

          <Stars rating={rating1} isEdit={false}></Stars>
        </>
      )}



      <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Forma parte del departamento/facultad de {deptoFacultad}</h1>
      <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Su principal linea de investigación es: {temaInv}</h1>
      <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Las tecnicas que se especializa son: {especialidades}</h1>

      {data && (<>


        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de problematico</h1>
        <Stars rating={rating2} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Interés en los estudiantes</h1>
        <Stars rating={rating3} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de conocimiento</h1>
        <Stars rating={rating4} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Nivel de exigencia</h1>
        <Stars rating={rating5} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Cantidad de recursos</h1>
        <Stars rating={rating6} isEdit={false}></Stars>

        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Disponibilidad de tiempo</h1>
        <Stars rating={rating7} isEdit={false}></Stars>

        <h1 className=' font-bold  text-3xl text-center md:text-4xl'> Sección de comentarios:</h1>
        <ul>
        {data.map((item) => (
          <li key={item._id}>
            <Comentario comentario={item.comentario}></Comentario>


          </li>

        ))}
        </ul>

      </>
      )}


    </div >




  )
}

export default PerfilAsesor
