// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-zinc-100 text-yellow-950 p-4 md:p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <span className=" text-sm lg:text-md font-bold mr-4 cursor-pointer">Califica tu asesor</span>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`flex-col md:flex-row flex ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="/">
            <span className=" font-bold mr-10 mt-3 md:mt-0 cursor-pointer text-sm lg:text-md">Inicio</span>
          </Link>
          <Link href="/dashboard">
            <span className="font-bold mr-10 mt-3 md:mt-0 cursor-pointer text-sm lg:text-md">Dashboard</span>
          </Link>
          <Link href="/nosotros">
            <span className=" font-bold mr-10 mt-3 md:mt-0 cursor-pointer text-sm lg:text-md">Nosotros</span>
          </Link>
          <div className="mt-3 md:mt-0">
            {!session ? (
              <button onClick={() => signIn()} className="text-white">
                Login
              </button>
            ) : (
              <div className="flex flex-col md:flex-col items-center">
                <span className=" font-bold mr-10 text-sm lg:text-md">{session.user.name}</span>

              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
