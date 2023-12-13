import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';

import axios from 'axios';

import NavBar from '@/components/NavBar';

import HeaderAsesor from '@/components/HeaderAsesor';

import ListaAsesores from '@/components/ListaAsesores';



function Asesores() {

    const router = useRouter();
    // Obtener el ID de la universidad de la URL


    const { id } = router.query;
    const [data, setData] = useState(null);

    const { data: session, status } = useSession()


    useEffect(() => {
        
        const fetchData = async () => {
            
            try {
                const response = await axios.get(`/api/consultaunidb?id=${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, []); // Este useEffect se ejecutará cada vez que el valor de 'id' cambie





    return (
        <div >
            <NavBar></NavBar>


            <div className=" h-screen bg-[url('/asesores.png')]  bg-cover bg-center ">
        

                        <HeaderAsesor univ={data.nombre}></HeaderAsesor>
                        <ListaAsesores iduni = {id} universidad = {universidad} idUniversidad = {idUniversidad}></ListaAsesores>

            


            </div>


        </div>
    );
}

export default Asesores;