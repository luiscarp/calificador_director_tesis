import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import NavBar from '@/components/NavBar';

function dashboard() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <span>Loading ... </span>
      }
    
      if (session) {
        return (

          <div className=" h-screen bg-[url('/fondodash.png')]  bg-cover bg-center ">
 <NavBar></NavBar>
          </div>
         

       
        )}
  return (
    <div className=" h-screen bg-[url('/fondodash.png')]  bg-cover bg-center ">
       <NavBar></NavBar>
    </div>
  )
}

export default dashboard
