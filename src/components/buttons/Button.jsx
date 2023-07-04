import React from 'react'
import styles from './page.module.css'

function Button({text, class_name}) {
  return (
    <button className={styles[class_name]}>{text}</button>
  )
}
export default Button