'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'


const Navbar = () => {
  return (
   
   <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Link href='/' title='Weblist Studio'>
          <Image
              src='/images/logo.png'
              fill={true}
              alt="Bcom Logo"
              className={styles.logo}
            />
        </Link>
      </div>
   </header>
   
  )
}

export default Navbar;
