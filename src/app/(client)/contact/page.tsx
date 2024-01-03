import React from 'react'
import Image from 'next/image'
import { airplane_arriving, airplane_paper, airplane_pilot, airplane_tealsky } from '@/assets/images'
import { ContactForm } from '@/ui'

export default function ContactPage() {
  return (
    <main className="flex flex-col relative min-h-screen">
      <div className="flex gap-4 relative bg-white py-10 container">
        <div className="flex-1 flex items-center">
          <ContactForm key={"80936"} />
        </div>
        <div className="flex-1 grid lg:grid-cols-[250px_250px] lg:grid-rows-[250px_100px_250px] grid-flow-dense gap-4">
          <div className="flex relative lg:row-span-2">
            <Image src={airplane_pilot} alt='Pilogue Plane on a Runway' className='object-cover object-center absolute left-0 top-0 w-full h-full' />
          </div>
          <div className="flex relative">
            <Image src={airplane_arriving} alt='Pilogue Plane on a Runway' className='object-cover object-center absolute left-0 top-0 w-full h-full' />
          </div>
          <div className="flex relative lg:row-span-2">
            <Image src={airplane_tealsky} alt='Pilogue Plane on a Runway' className='object-cover object-right absolute left-0 top-0 w-full h-full' />
          </div>
          <div className="flex relative">
            <Image src={airplane_paper} alt='Pilogue Plane on a Runway' className='object-cover object-center absolute left-0 top-0 w-full h-full' />
          </div>
        </div>
      </div>
    </main>
  )
}
