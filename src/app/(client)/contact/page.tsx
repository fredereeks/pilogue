import { nigeria_aircraftbg } from '@/assets/images'
import { BreadCrumb } from '@/ui'
import React from 'react'

export default function Contact() {
  return (
    <main className="flex flex-col relative min-h-screen">
        <BreadCrumb key={"8066034"} image={nigeria_aircraftbg} previous='Home' current='/contact' />
    </main>
  )
}
