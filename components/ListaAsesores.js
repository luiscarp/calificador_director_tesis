import React from 'react'

import axios from 'axios';



import { Toaster, toast } from 'react-hot-toast';

import { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';
import Asesor from './Asesor';


function ListaAsesores({ iduni, universidad }) {

    const { data: session, status } = useSession()

    const [data, setData] = useState()

    const [desplegar, setDesplegar] = useState(false)

    const [nombre, setNombre] = useState("")

    const [temaInv, setTemaInv] = useState("")

    const [especialidades, setEspecialidades] = useState("")

    const [deptoFacultad, setDeptoFacultad] = useState("")





    useEffect(() => {

        fetchData();
    }, [iduni]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/consultaasesordb?id=${iduni}`);
            setData(response.data);
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Para evitar que la página se recargue al enviar el formulario

        // Aquí podrías hacer algo con los valores de nombre y ubi, como enviarlos a una API

        setDesplegar(false); // Establece desplegar como false

        console.log(nombre)

        console.log(temaInv)

        console.log(especialidades)

        console.log(deptoFacultad)

        try {
            // Enviar datos a "/api/testmongodb" mediante una solicitud POST con Axios
            const response = await axios.post('/api/asesordb', {
                nombre: nombre, // nombre: nombre
                universidad: universidad,
                idUniversidad: iduni,
                temaInv: temaInv,
                especialidades: especialidades,
                deptoFacultad: deptoFacultad
            });

            // Manejar la respuesta
            console.log('Datos enviados con éxito:', response.data);

            await fetchData();

            toast.success("Asesor enviado con exito")

        }

        catch (error) {
            // Manejar errores en la solicitud
            console.error('Error en la solicitud:', error);
        }






    };

    const handleShowAgregar = () => {
        setDesplegar(true);
    };

    const handleHideAgregar = () => {
        setDesplegar(false);
    };



    return (
        <div className='flex flex-col w-full items-center'>

            <Toaster></Toaster>

            <h1 className=' font-bold text-xl text-center my-2 md:text-6xl mb-3 text-yellow-950'> ¿No encuentras tu asesor de tésis? <span className=' text-blue-900'> Agregalo</span></h1>


            {desplegar && (
                <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl" onClick={handleHideAgregar} >Cerrar dialogo</button>

            )}
            {(!desplegar && status == "authenticated") && (
                <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl mb-20" onClick={handleShowAgregar} >Agregar Asesor Tesis</button>

            )}


            {desplegar && (
                <form className=' flex flex-col my-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl text-yellow-950 mb-3 md:text-4xl' htmlFor="nombre">Ingrese nombre Asesor:</label>
                        <input
                            className=' text-xl md:text-4xl'
                            type="text"
                            id="nombre"
                            value={nombre}
                            placeholder='Nombre de universidad'
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl text-yellow-950 mb-3 md:text-4xl' htmlFor="ubi">Ingrese Tema de investigación:</label>
                        <input
                            className=' text-xl md:text-4xl'
                            type="text"
                            id="ubi"
                            value={temaInv}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setTemaInv(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl text-yellow-950 mb-3 md:text-4xl' htmlFor="ubi">Ingrese especialidades:</label>
                        <input
                            className=' text-xl md:text-4xl'
                            type="text"
                            id="ubi"
                            value={especialidades}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setEspecialidades(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl text-yellow-950 mb-3 md:text-4xl' htmlFor="ubi">Ingrese el departamento o facultad:</label>
                        <input
                            className=' text-xl md:text-4xl'
                            type="text"
                            id="ubi"
                            value={deptoFacultad}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setDeptoFacultad(e.target.value)}
                        />
                    </div>
                    <button className='mb-20 mx-auto mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-2xl ' type="submit">Enviar</button>
                </form>
            )}

            <ul className='bg-stone-100 w-full'>
                <h1 className=' font-bold text-xl text-center my-2 md:text-6xl mb-3 text-yellow-950'> Lista de asesores <span className=' text-blue-900'>completa</span></h1>
                {data && data.map((item) => (
                    <li key={item._id}>
                        <Asesor fetchData={fetchData} asesor={item}></Asesor>

                    </li>


                ))}

            </ul>

        </div>
    )
}

export default ListaAsesores
