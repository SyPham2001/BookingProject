import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterMoDal from './components/modals/RegisterModal'
import ToasterProvider from '@/app/providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

export const metadata: Metadata = {
  title: 'VietBookingApp',
  description: 'Viet Booking App Clone'
}
const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterMoDal />
          <Navbar currentUser = {currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
         {children}
        </div>
        
      </body>
    </html>
  )
}
