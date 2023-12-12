import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import axios from 'axios';




function Asesores() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const { id } = router.query; // Obtener el ID de la universidad de la URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://calificador-director-tesis.vercel.app/api/consultaunidb?id=${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]); // Este useEffect se ejecutará cada vez que el valor de 'id' cambie

    console.log(data); // Esto mostrará 'data' en la consola cada vez que el componente se renderice



    return (
        <div>
            <h1>Asesores de la Universidad</h1>
            {data &&  (
                    <h1 >
                        {data.nombre}

                    </h1>


)}

         
        </div>
    );
}

export default Asesores;