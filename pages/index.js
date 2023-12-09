import Image from 'next/image'
import { Inter } from 'next/font/google'
import BtnLogin from '@/components/BtnLogin'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <BtnLogin></BtnLogin>


    </main>
  )
}
