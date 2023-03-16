import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    children: React.ReactNode; //👈 children prop typr
  };

function Button(props: ButtonProps) {
  return (
    <button type='button' className={styles.button}>{props.children} </button>
  )
}

export default Button