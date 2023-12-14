import React from 'react'

function Comentario({comentario}) {
  return (
    <div className=' flex flex-col my-4'>
      <h1 className=' font-bold text-2xl text-center md:text-4xl'>Comentario anonimo:</h1>
      <h1 className=' text-2xl text-center md:text-4xl' >{comentario}</h1>
    </div>
  )
}

export default Comentario
