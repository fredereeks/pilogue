import { airplane_tarmac } from '@/assets/images'
import { SignupForm } from '@/ui'
import Image from 'next/image'
import React from 'react'

export default function SignupPage() {

    return (
        <main className="flex flex-col relative">
            <section className="flex relative min-h-[calc(100vh-100px)] w-full md:flex">
                <div className="flex md:relative flex-1">
                    <Image src={airplane_tarmac} alt='Pilogue Plane on a Runway' className='object-cover absolute left-0 top-0 w-full h-full' />
                </div>
                <SignupForm key={'820750'} />
            </section>
        </main>
    )
}

{/* <div className="flex flex-col gap-2">
    <h5 className="text-lg font-semibold text-primary">Medical Report</h5>
    <ul className="list-inside list-[square] divide-y divide-solid divide-slate-300 flex flex-col px-3">
        {
            [
                "Eye Test", "Blood Pressure", "Heart ECG", "Blood Sugar", "Blood Analysis"
            ].map((report, i) => <li key={i.toString()} className='py-2 px-1 text-xs text-slate-500'>{report}</li>)
        }
    </ul>
</div>  */}