

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home page',
  description: 'This is where the main app is',
}

export default function Home() {
  return (
    <>
        <main>
          <p>Home</p>
        </main>
    
    </>
  )
}
