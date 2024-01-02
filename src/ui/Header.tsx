"use client"
import Link from 'next/link'
import React from 'react'
import {IoIosAirplane} from "react-icons/io"

export default function Header() {
  return (
    <header className="bg-white py-2 px-5 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
            <Link href={"/"} className="h-12 w-12 rounded-full bg-sky-500 grid place-items-center cursor-pointer">    
                <h1 className="h-10 w-10 flex-shrink-0 rounded-full bg-primary grid place-items-center cursor-pointer relative after:bg-white/50 after:w-5 after:h-1 after:absolute after:top-[70%] after:left-1/3 after:rounded-[50%]">
                    <IoIosAirplane className="text-white text-3xl -rotate-45 relative z-10" />
                </h1>
            </Link>
            <nav className="flex gap-4 items-center flex-end">
              <Link href={"/contact"} className='py-2 px-5 text-xs sm:text-sm text-slate-800 border border-slate-800 rounded-[2rem] hover:bg-slate-900 hover:text-slate-100'>Contact</Link>
              <Link href={"/login"} className='py-2 px-5 text-xs sm:text-sm text-slate-800 border border-slate-800 rounded-[2rem] hover:bg-slate-900 hover:text-slate-100'>Login</Link>
              <Link href={"/signup"} className='py-2 px-5 text-xs sm:text-sm text-slate-50 border rounded-[2rem] bg-slate-900 hover:bg-slate-900'>Signup</Link>
            </nav>
        </div>
    </header>
  )
}
