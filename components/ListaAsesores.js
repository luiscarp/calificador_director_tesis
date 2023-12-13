import React from 'react'

import axios from 'axios';

import { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';


function ListaAsesores({ iduni}) {

    const { data: session, status } = useSession()

    const [data, setData] = useState()

    const [desplegar, setDesplegar] = useState(false)

    const [nombre, setNombre] = useState("")

    const [temaInv, setTemaInv] = useState("")

    const[especialidades, setEspecialidades] = useState("")

    const[deptoFacultad, setDeptoFacultad] = useState("")
  


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
    

    
    
    
      };

    const handleShowAgregar = () => {
        setDesplegar(true);
    };

    const handleHideAgregar = () => {
        setDesplegar(false);
    };

    

    return (
        <div className='flex flex-col w-full items-center'>
            
            <h1 className=' font-bold text-xl text-center my-2 md:text-6xl mb-3'> Lista de Asesores</h1>
            {desplegar && (
                <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl" onClick={handleHideAgregar} >Cerrar dialogo</button>

            )}
            {!desplegar && (
                <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-4xl mb-5" onClick={handleShowAgregar} >Agregar Asesor Tesis</button>

            )}


            {desplegar && (
                <form className=' flex flex-col my-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl' htmlFor="nombre">Ingrese nombre Asesor:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            placeholder='Nombre de universidad'
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl' htmlFor="ubi">Ingrese Tema de investigación:</label>
                        <input
                            type="text"
                            id="ubi"
                            value={temaInv}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setTemaInv(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl' htmlFor="ubi">Ingrese especialidades:</label>
                        <input
                            type="text"
                            id="ubi"
                            value={especialidades}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setEspecialidades(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className=' font-bold text-xl' htmlFor="ubi">Ingrese el departamento o facultad:</label>
                        <input
                            type="text"
                            id="ubi"
                            value={deptoFacultad}
                            placeholder='ubicacion universidad'
                            onChange={(e) => setDeptoFacultad(e.target.value)}
                        />
                    </div>
                    <button className=' mx-auto mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3 font-bold md:text-2xl ' type="submit">Enviar</button>
                </form>
            )}
            <ul>
                {data && data.map((item) => (
                    <li key={item._id}>
                        <h1 className=' font-bold'>{item.nombre}</h1>

                    </li>


                ))}

            </ul>

        </div>
    )
}

export default ListaAsesores
