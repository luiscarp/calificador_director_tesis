import React from 'react'

function HeaderAsesor({univ}) {
  return (
    <div className=' w-full'>
      <h1 className=' font-bold text-xl text-center my-2 md:text-6xl mb-3 text-yellow-950'>Universidad: {univ}</h1>
    </div>
  )
}

export default HeaderAsesor
