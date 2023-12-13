import { useRouter } from "next/router";

function Calificacion() {
    const router = useRouter();
    // Obtener el ID de la universidad de la URL


    const { id } = router.query;
    
  return (
    <div>
      <h1>Aqui iran las calificaciones de cada asesor seleccionado {id}</h1>
    </div>
  )
}

export default Calificacion
