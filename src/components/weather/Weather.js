import React from 'react'
import styles from './Weather.module.css'
import { useNavigate } from 'react-router-dom'

const Weather = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <span>Today's Weather</span>
      <div onClick={() => { navigate("/weather") }} className={styles.card}>
        <div className={styles.card__header}>
          <img src="./New folder/icons8-marker-o-50.png" alt="" />
          <img src="./New folder/icons8-share-30.png" alt="" />
        </div>
        <div className={styles.card__main}>
          <img src="./New folder/cloud.png" alt="" />
          <div className={styles.card_temp}>
            <h2>23°</h2>
            <p>High : 30°/</p>
            <p>low : 15°</p>
          </div>
          <div className={styles.card__about}>
            Hazy Sunshine
          </div>
        </div>
        <div className={styles.card__footer}>
          <img src="/New folder/icons8-mic-66.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Weather