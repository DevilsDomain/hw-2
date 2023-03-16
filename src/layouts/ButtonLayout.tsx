import React from 'react'
import Button from '@/components/Button/Button';

type LayoutProps = {
    children: React.ReactNode; //👈 children prop typr
  };

function ButtonLayout({children}: LayoutProps) {
  return (
    <main>
        {children}
        <Button> Go Back</Button>
    </main>
  )
}

export default ButtonLayout