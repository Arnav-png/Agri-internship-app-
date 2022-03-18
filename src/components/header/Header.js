import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.main}>
      <div>
        <p>Hi Demba!</p>
      </div>
      <div className={styles.main__img}>
        <img src="./New folder/icons8-cart-64.png" alt="" />
        <img src="./New folder/icons8-bell-24.png" alt="" />

      </div>
    </div>
  )
}

export default Header