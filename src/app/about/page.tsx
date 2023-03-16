import React from 'react'
import ButtonLayout from '@/layouts/ButtonLayout'

export const metadata = {
    title: 'About page',
    description: 'Info on the website',
  }

function page() {
  return (
    <ButtonLayout>
        <div>
            <h1>About page</h1>
            <h3>Type something after the /</h3>
            <h3>for example /about me</h3>
        </div>
    </ButtonLayout>
  )
}

export default page