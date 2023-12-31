import Link from 'next/link'
import React from 'react'
import {IoIosAirplane} from "react-icons/io"

export default function Header() {
  return (
    <header className="bg-transparent py-2 px-5">
        <div className="container mx-auto flex items-center justify-between">
            <Link href={"/"} className="h-12 w-12 rounded-full bg-sky-500 grid place-items-center cursor-pointer">    
                <h1 className="h-10 w-10 rounded-full bg-primary grid place-items-center cursor-pointer relative after:bg-white/50 after:w-5 after:h-1 after:absolute after:top-[70%] after:left-1/3 after:rounded-[50%]">
                    <IoIosAirplane className="text-white text-3xl -rotate-45 relative z-10" />
                </h1>
            </Link>
        </div>
    </header>
  )
}
