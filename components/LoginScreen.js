import { useSession, signIn, signOut } from "next-auth/react";

import React from 'react'

import Link from "next/link";

function LoginScreen() {
  const { data: session, status } = useSession()
  console.log(status)

  if (status === "loading") {
    return <span>Loading ... </span>
  }

  if (status=="authenticated") {
    return (
      <>
        <div className=" h-1/3">


        </div>

        <div className=" h-1/3 flex flex-col justify-start items-center">
          <Link className=" mt-3 bg-blue-200 text-sky-950 p-2 font-bold text-lg shadow shadow-black rounded-md md:text-2xl" href="/dashboard"> Ir al dashboard </Link>

        </div>
        <div className=" w-full flex flex-col  bg-sky-950 items-center mt-4 py-5 text-white mx-auto text-lg font-bold justify-center md:w-full md:text-2xl">
          Bienvenido, {session.user.name}



          <button className=" mt-3 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow" onClick={() => signOut()}>Cerrar sesión</button>

        </div>





      </>





    )
  }
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col h-1/3 justify-start items-center ">
        <h1 className=" text-md font-bold bg-sky-950 text-justify px-2 text-white w-full md:text-xl">
          Califica tu asesor de tesis es un proyecto open source para ayudar a estudiantes de Licenciatura y posgrado a encontrar a su asesor ideal. Para emitir una calificacion de calidad, te pediremos que te autentiques, pero tu calificación sera totalmente anonima.
        </h1>

      </div>
      <div className=" flex flex-col h-1/3 justify-start items-center">

      <button className=" mt-3 bg-blue-200 text-sky-950 p-2 rounded-md shadow-black shadow text-lg font-bold justify-center md:w-full md:text-2xl" onClick={() => signIn()}>Quiero calificar a mi asesor de tesis</button>
     

      </div>

      <div className=" flex flex-col h-1/3 justify-start items-center">
      <Link className=" mt-3 bg-blue-200 text-sky-950 p-2 font-bold text-lg shadow shadow-black rounded-md md:text-2xl" href="/dashboard"> Estoy buscando un asesor de tesis </Link>

      </div>

    </div>
  )
}

export default LoginScreen
