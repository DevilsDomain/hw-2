'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import router from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <div>
      {/* <Link href="/about">Abotut</Link>
      <Link href="/">Home</Link> */}
      <h4 onClick={() => router.push('/about')}>About</h4>
      <h4 onClick={() => router.push('/')}>Home</h4>
    </div>
  )
}

export default Navbar