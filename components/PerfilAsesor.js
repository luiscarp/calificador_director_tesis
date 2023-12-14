import React from 'react'

import Stars from './Stars'

import StarsCal from './StarsCal';

import { useState, useEffect } from 'react';

import axios from 'axios';

import Comentario from './Comentario';

import { useSession } from 'next-auth/react';

import { Toaster, toast } from 'react-hot-toast';

import EliminarComentario from './EliminarComentario';

function PerfilAsesor({ nombre, universidad, deptoFacultad, temaInv, especialidades, idAsesor }) {
  const [data, setData] = useState()
  const [general, setGeneral] = useState(1)
  const [problematico, setProblematico] = useState(1)
  const [interes, setInteres] = useState(1)
  const [conocimiento, setConocimiento] = useState(1)
  const [exigencia, setExigencia] = useState(1)
  const [recursos, setRecursos] = useState(1)
  const [disponibilidad, setDisponibilidad] = useState(1)
  const [comentario, setComentario] = useState("")
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [rating7, setRating7] = useState(0);
  const [promGeneral, setPromGeneral] = useState()
  const { data: session, status } = useSession()

  const [desplegar, setDesplegar] = useState(false)

  useEffect(() => {

    fetchData();

  }, [idAsesor]);

 
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


  const handleShowAgregar = () => {
    setDesplegar(true);
  };

  const handleHideAgregar = () => {
    setDesplegar(false);
  };


  const handleInputChange = (e) => {
    setComentario(e.target.value); // Actualiza el estado con el valor actual del input
  };

  const handleCalificate = async () => {
    try {
      // Enviar datos a "/api/testmongodb" mediante una solicitud POST con Axios
      const response = await axios.post('/api/calificacionesdb', {
        id_asesor: idAsesor,
        general: general,
        problematico: problematico,
        interes: interes,
        conocimiento: conocimiento,
        exigencia: exigencia,
        recursos: recursos,
        disponibilidad: disponibilidad,
        comentario: comentario,
        email_user: session.user.email
      });

      // Manejar la respuesta
      console.log('Datos enviados con éxito:', response.data);

      fetchData();

      toast.success("Asesor enviado con exito")
      window.location.reload();

    }

    catch (error) {
      // Manejar errores en la solicitud
      console.error('Error en la solicitud:', error);
    }



    setDesplegar(false);
  };







  return (


    <div className=' flex flex-col justify-center items-center'>
      <Toaster></Toaster>




      <h1 className=' mt-6 font-bold text-2xl md:text-4xl text-center'>{nombre}</h1>

      <h1 className=' my-6 font-semibold text-2xl md:text-4xl text-center'>Pertenece a: {universidad}</h1>

      {desplegar && (
        <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl" onClick={handleHideAgregar} >Cerrar dialogo</button>

      )}
      {(!desplegar && status == "authenticated") && (
        <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl mb-5" onClick={handleShowAgregar} >Calificar asesor</button>

      )}

      {desplegar && (<>
        <h1 className=' my-6 font-bold text-2xl md:text-4xl text-center'>Según tu opinión, califica al asesor</h1>
        <h1 className=' font-semibold text-2xl md:text-4xl text-center'>Desempeño General</h1>
        <StarsCal setRating ={setGeneral} rating = {general}></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{general}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tan problemático es?</h1>
        <StarsCal setRating ={setProblematico} rating = {problematico} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{problematico}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tanto interés demuestra en el alumno?</h1>
        <StarsCal setRating ={setInteres} rating = {interes} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{interes}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tanto conocimiento tiene del tema?</h1>
        <StarsCal setRating ={setConocimiento} rating = {conocimiento} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{conocimiento}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tan exigente es con los alumnos?</h1>
        <StarsCal setRating ={setExigencia} rating = {exigencia} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{exigencia}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tantos recursos tiene para la tesis?</h1>
        <StarsCal setRating ={setRecursos} rating = {recursos} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{recursos}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>¿Qué tanta disponibilidad tuvo para el trabajo?</h1>
        <StarsCal setRating ={setDisponibilidad} rating = {disponibilidad} ></StarsCal>
        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>{disponibilidad}/5</h1>

        <h1 className='mt-5 font-semibold text-2xl md:text-4xl text-center'>Da un breve comentario sobre tu asesor, recuerda que todo será anonimo</h1>
        <input
        type='text'
        value={comentario}
        onChange={handleInputChange}
        placeholder='Coloca aquí un breve comentario sobre tu asesor, alguna cosa que quieras destacar o agregar sobre la persona. Recuerda mantener el respeto.'
        className=' text-2xl h-60  w-full'
        />
        <button className=" my-8 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl mb-5" onClick={handleCalificate} >Calificar asesor</button>

        </>
        
      )}

      {data && (
        <>
          <h1 className=' mt-10 font-semibold text-2xl md:text-4xl text-center'>Calificacion general</h1>

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
              {(  status==="authenticated" && session.user.roles.includes("admin") ) && (<>
                <h1 className=' font-bold text-lg md:text-2xl'>Comentario realizado por: {item.email_user}</h1>
                <EliminarComentario llave= {item._id} fetchData = {fetchData}></EliminarComentario>
                </>
              )}


            </li>

          ))}
        </ul>

      </>
      )}


    </div >




  )
}

export default PerfilAsesor
