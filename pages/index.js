import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginScreen from '@/components/LoginScreen'
import Cinta from '@/components/Cinta'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className=" h-screen bg-[url('/index.png')]  bg-cover bg-center bg-no-repeat">
        <Cinta></Cinta>
        <LoginScreen></LoginScreen>

      </div>
    
      

    </main>
  )
}
