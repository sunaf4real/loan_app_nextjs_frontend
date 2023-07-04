import React from 'react'
import footerstyles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={footerstyles.footer}>
    
            <div>@ 2023. All Right Reserved</div>
            <div className={footerstyles.media}>
              <div className={footerstyles.iconDiv}>
                <Link href='/' title='facebook'>
                  <Image
                      src='/images/facebook.png'
                      fill={true}
                      alt="facebook"
                      className={footerstyles.icon}
                    />
                </Link>
              </div>
          
              <div className={footerstyles.iconDiv}>
              <Link href='/' title='instagram'>
                <Image
                    src='/images/instagram.png'
                    fill={true}
                    alt="instagram"
                    className={footerstyles.icon}
                  />
              </Link>
            </div>

            <div className={footerstyles.iconDiv}>
                <Link href='/' title='linkedin'>
                  <Image
                      src='/images/linkedin.png'
                      fill={true}
                      alt="linkedin"
                      className={footerstyles.icon}
                    />
                </Link>
              </div>

              <div className={footerstyles.iconDiv}>
              <Link href='/' title='youtube'>
                <Image
                    src='/images/youtube.png'
                    fill={true}
                    alt="youtube"
                    className={footerstyles.icon}
                  />
              </Link>
            </div>
            </div>      
      
    </div>
  )
}

export default Footer
