import React from 'react'

import NavBar from '@/components/NavBar';

import SearchBox from '@/components/SearchBox';



import toast from 'react-hot-toast';

import { Toaster } from 'react-hot-toast';



import ListaUniversidades from '@/components/ListaUniversidades';

import Footer from '@/components/Footer';

function dashboard() {







  return (
    <div className=" bg-cyan-50">
      <NavBar></NavBar>


      <ListaUniversidades></ListaUniversidades>

      <Footer></Footer>





    </div>
  )
}

export default dashboard
