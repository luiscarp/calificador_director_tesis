import Image from 'next/image'
import { Inter } from 'next/font/google'
import BtnLogin from '@/components/BtnLogin'
import Cinta from '@/components/Cinta'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className=" h-screen bg-[url('/landing.png')]  bg-cover bg-center bg-no-repeat">
        <Cinta></Cinta>
        <BtnLogin></BtnLogin>

      </div>
    
      

    </main>
  )
}
