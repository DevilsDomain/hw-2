import Image from 'next/image'
import { Inter } from 'next/font/google'
import image from '../../public/thumb-1920-69561 copy.jpeg'
import Script from 'next/script'
import { helloScript } from '@/scripts/helloScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home page',
  description: 'This is where the main app is',
}

export default function Home() {
  return (
    <>
      <main>
        <p>Home Page</p>
        <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
          <Image
            src={image}
            alt="Picture of the author"
            className="absolute object-cover w-full h-full"
            width={1000}
            height={1000}
          />
          <Script id='one' >{`${helloScript}`}</Script>
        </div>
      </main>
    </>
  )
}
