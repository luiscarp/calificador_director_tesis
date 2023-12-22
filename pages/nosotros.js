import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


function nosotros() {
    return (
        <div className=" bg-cyan-50 w-full">
            <NavBar></NavBar>

            <img src="https://avatars.githubusercontent.com/u/76863603?v=4"
                        className=" w-28 rounded-full md:w-48  mx-auto mt-10" />

            <h1 className=' text-center font-bold text-2xl md:text-4xl'>M. Sc. Luis Rodriguez-Pacheco</h1>

            <h1 className=' text-center mt-10  font-semibold text-lg md:text-3xl'>Materials Science</h1>

            <h1 className=' text-center mt-10  font-semibold text-lg md:text-3xl'>Full stack dev</h1>

            <h1 className=' text-center mt-10  font-semibold text-lg md:text-3xl'>ciencia de datos</h1>

            <h1 className=' text-center mt-10  font-semibold text-lg md:text-3xl'>modelos predictivos</h1>

            <h1 className=' text-center mt-10  font-semibold text-lg md:text-3xl'>luisc.rodriguezpacheco@gmail.com</h1>


            <Footer></Footer>

        </div>
    )
}

export default nosotros
