import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <footer className="bg-gray-200 text-slate-700 p-5 relative z-50">
        <div className="container mx-auto flex items-center justify-between">
            <small className="text-xs">&copy;{new Date().getFullYear()} Pilogue. All Rights Reserved.</small>
            <div className="flex gap-2 items-center">
              <Link href={"#"} className='text-xs text-slate-700 hover:text-slate-900'>Privacy Policy</Link>
              <Link href={"#"} className='text-xs text-slate-700 hover:text-slate-900'>Cookie Policy</Link>
              <Link href={"#"} className='text-xs text-slate-700 hover:text-slate-900'>Sitemap</Link>
            </div>
        </div>
    </footer>
  )
}
