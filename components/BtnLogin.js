import { useSession, signIn, signOut } from "next-auth/react";

import React from 'react'

function BtnLogin() {
    const {data: session, status} = useSession()

    if (status === "loading"){
        return <span>Loading ... </span>
    }

    if (session) {
        return(
            <>
            
            signed in as {session.user.email} <br></br>

            <button onClick={ () => signOut()}>Sign Out</button>
            
            
            
            
             </>

            
     


        )
    }
  return (
    <div>
        Not signed in <br></br>
        <button onClick={ () => signIn()}>Sign in</button>
      
    </div>
  )
}

export default BtnLogin
