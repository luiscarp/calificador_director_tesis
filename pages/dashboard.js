import React from 'react'

import NavBar from '@/components/NavBar';

import SearchBox from '@/components/SearchBox';



import toast from 'react-hot-toast';

import { Toaster } from 'react-hot-toast';



import ListaUniversidades from '@/components/ListaUniversidades';

function dashboard() {

  


  


  return (
    <div className=" bg-[url('/fondodash.png')]  bg-cover bg-center bg-repeat-y ">
       <NavBar></NavBar>
       
       
       <ListaUniversidades></ListaUniversidades>

     
       
  

    </div>
  )
}

export default dashboard
