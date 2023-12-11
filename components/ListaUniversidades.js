import React from 'react'

import Universidad from './Universidad'

import { useState, useEffect } from 'react'


import { Toaster, toast } from 'react-hot-toast';

import axios from 'axios'

function ListaUniversidades() {
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
    return (
        <div className=' flex flex-col w-full items-center'>
            <h1 className=' font-bold text-xl text-center my-2'> Lista de universidades</h1>
            <button className=" mt-1 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow w-2/3" >Agrega Universidad</button>
            <ul>
                {data && data.map((item) => (
                    <li key={item._id}>
                        <Universidad universidad={item} />

                    </li>


))}

            </ul>


      

        </div>
    )
}

export default ListaUniversidades
