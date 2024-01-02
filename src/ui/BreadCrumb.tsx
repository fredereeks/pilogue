import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

type BreadCrumbProps = {
    image: StaticImageData
    previous: string
    current: string
    extra?: string
}

export default function BreadCrumb({ image, previous, current, extra }: BreadCrumbProps) {
    return (
        <section className="relative border-2 border-orange-500 bg-sky-500">
            <Image src={image} alt={extra ? `Pilogue ${extra} Page` : `Pilogue ${current} Page`} className="left-0 top-0 w-full h-full object-cover absolute" />
            <aside className="py-20 px-4 relative bg-[#0009]">
                <div className="container mx-auto relative py-10 text-white flex items-center flex-wrap gap-4">
                    <Link href="/" className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">{previous}</Link>
                    <FaChevronRight className="mx-2 text-white font-bold text-lg sm:text-xl opacity-80" />
                    {
                        extra ?
                            <>
                                <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">{current.slice(1)}</h3>
                                <FaChevronRight className="mx-2 text-white font-bold text-xl sm:text-2xl md:text-3xl" />
                                <Link href={extra} className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl opacity-90">{extra.slice(1).replaceAll("-", "")}</Link>
                            </> :
                            <>
                                <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl">{current.slice(1)}</h3>
                            </>
                    }
                </div>
            </aside>
        </section>
    )
}
