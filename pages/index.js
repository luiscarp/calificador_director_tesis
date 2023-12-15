import { Inter } from 'next/font/google'
import LoginScreen from '@/components/LoginScreen'
import Cinta from '@/components/Cinta'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className=" h-screen bg-[url('/index.png')]  bg-cover bg-center bg-no-repeat">
        <h1>Califica a tu asesor de tesis</h1>
        <LoginScreen></LoginScreen>

      </div>
    
      

    </main>
  )
}
