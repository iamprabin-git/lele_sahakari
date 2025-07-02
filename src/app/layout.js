import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HoverDropdown from '@/components/HoverDropdown'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lele agricultural cooperative Ltd.',
  description: 'Local Based cooperative in lele, Lalitpur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-transition`}>
        <Header />
        <HoverDropdown />
        
        {children}
        <WhatsAppButton />
        <Footer />
        
      </body>
    </html>
  )
}