import { nigeria_aircraft } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative overflow-y-hidden flex flex-col items-center justify-between min-h-screen before:absolute before:h-[60vw] before:w-[60vw] before:rounded-full before:bg-sky-500/50 before:top-1/2 before:-left-[5rem] before:z-1 after:absolute after:h-[40vw] after:w-[40vw] after:rounded-full after:bg-orange-300/50 after:-top-1/2 after:-right-[5rem] after:z-1 p-4">
        <div className="container h-full mx-auto grid grid-cols-1 sm:grid-cols-2 py-20 relative">
          <div className="relative min-h-[20vh]">
            <Image src={nigeria_aircraft} alt='Inbound Pilogue Plane' fill={true} className='object-cover top-0 left-1/2 absolute -rotate-12' />
          </div>
          <div className="relative z-10 flex flex-col gap-2 p-4">
            <h2 className="text-slate-600 font-semibold sm:max-w-[18rem]">Meet the Future of Pilot Assessment in Nigeria</h2>
            <h2 className="text-primary font-bold text-4xl">Pilogue</h2>
            <p className="text-primary text-sm text-justify leading-loose max-w-md">Pilogue is an application for recording and collecting real-time information of pilots in Nigeria. It is used to monitor their activities, track their flight schedules, type ratings, medical fitness, courses taken as well as promotion dues.</p>
            <Link href={"/"} className='bg-primary hover:bg-white hover:text-primary text-white border border-primary mt-2 py-2 px-5 rounded-[2rem] w-max text-sm tracking-tight flex items-center group'><span>Find out More</span> <FaArrowRightLong className="text-inherit text-xs font-thin ml-2 transition-all" /></Link>
          </div>
        </div>
      </section>
    </main>



  )
}
