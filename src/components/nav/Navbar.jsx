'use client'
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'



const links=[
  {
    id: 1,
    title:"Request For Loan",
    url: "/",
  },
  {
    id: 2,
    title:"View Loan Requests",
    url: "/loan-request",
  },
  
];

const Navbar = () => {
  return (
   
   <nav className={styles.nav}>
      <ul  className={styles.ul}>
        {links.map((link)=>(
          <Link key={link.id} href={link.url} className={styles.li}>
          {link.title}
          </Link>
        ))}
      </ul>  
   </nav>
   
  )
}

export default Navbar;
