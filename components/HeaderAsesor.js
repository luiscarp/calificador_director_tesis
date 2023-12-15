import React from 'react'

function HeaderAsesor({univ}) {
  return (
    <div className=' w-full'>
      <h1 className=' font-bold text-center text-xl my-2 md:text-4xl text-yellow-950'>Universidad: {univ}</h1>
    </div>
  )
}

export default HeaderAsesor
