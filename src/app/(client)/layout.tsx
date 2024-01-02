import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Header, Footer } from '../../ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pilogue :: Home',
  description: 'Pilogue is an application for recording and collecting real-time information of pilots in Nigeria. It is used to monitor their activities, track their flight schedules, type ratings, medical fitness, courses taken as well as promotion dues.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mt-[64px]`}>
        <Header />  
        {children}
        <Footer />  
      </body>
    </html>
  )
}
