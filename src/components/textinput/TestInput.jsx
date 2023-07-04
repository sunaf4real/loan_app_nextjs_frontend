import React from 'react'
import styles from './page.module.css'

function TestInput({title,placeholder, type, value, setvalue}) {

  return (
      <div className={styles.textDiv}>
            <div className={styles.textTitle}>{title}:</div>
            <input 
              className={styles.textInput} 
              placeholder={placeholder} 
              type={type}
              value={value}
              onChange={(event) => setvalue(event.target.value)} 
            />
      </div>

  )
}
export default TestInput