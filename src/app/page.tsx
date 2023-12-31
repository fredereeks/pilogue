import { airplane_ash } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative flex flex-col items-center justify-between min-h-screen before:absolute before:h-[60vw] before:w-[60vw] before:rounded-full before:bg-sky-500/50 before:top-1/2 before:-left-[5rem] before:z-1 after:absolute after:h-[40vw] after:w-[40vw] after:rounded-full after:bg-sky-500/50 after:-top-1/2 after:-right-[5rem] after:z-1 p-5">
        <div className="container h-full mx-auto grid grid-cols-1 sm:grid-cols-2 py-20 relative">
          <div className="relative min-h-[40vh]">
            <Image src={airplane_ash} alt='Inbound Pilogue Plane' fill={true} className='object-cover top-0 left-1/2 absolute scale-120 -rotate-12' />
          </div>
          <div className=" flex flex-col gap-2 p-4">
            <h2 className="text-slate-600 font-semibold max-w-[18rem]">Meet the Future of Pilot Assessment in Nigeria</h2>
            <h2 className="text-primary font-bold text-4xl">Pilogue</h2>
            <p className="text-primary text-sm text-justify leading-loose max-w-md">Pilogue is an application for recording and collection real-time tracking of pilot activities, progress and proceedings in the airport.</p>
            <Link href={"/"} className='bg-primary hover:text-slate-100 text-white mt-2 py-2 px-5 rounded-[2rem] w-max text-sm tracking-tight flex items-center group'><span>Find out More</span> <FaArrowRightLong className="text-inherit text-xs font-thin ml-2 transition-all" /></Link>
          </div>
        </div>
      </section>
    </main>



  )
}
