'use client';
import React from 'react'
import styles from './Button.module.css'
import { useRouter } from 'next/navigation';


type ButtonProps = {
    children: React.ReactNode; //👈 children prop typr
  };

  function Button(props: ButtonProps) {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.back()} className={styles.button}>
        {props.children}</button>
  )
}

export default Button