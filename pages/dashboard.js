import React from 'react'

import NavBar from '@/components/NavBar';

import SearchBox from '@/components/SearchBox';

import axios from 'axios';

import toast from 'react-hot-toast';

import { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react';

import ListaUniversidades from '@/components/ListaUniversidades';

function dashboard() {
  


  


  return (
    <div className=" h-screen bg-[url('/fondodash.png')]  bg-cover bg-center ">
       <NavBar></NavBar>
       
       
       <ListaUniversidades></ListaUniversidades>
  

    </div>
  )
}

export default dashboard
