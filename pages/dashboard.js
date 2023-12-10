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

          <>
          <NavBar></NavBar>

          </>
        )}
  return (
    <div>
       <NavBar></NavBar>
    </div>
  )
}

export default dashboard
