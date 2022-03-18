import React from 'react'
import style from './News.module.css'


const AgriServices = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h4>Agri Services</h4>
        <img src="./New folder/icons8-right-arrow-32.png" alt="" />
      </div>
      <div className={style.card__wrapper}>
        <div className={style.card}>
          <img src="./New folder/service1.png" alt="" />
          <p>Soil Testing</p>
        </div>
        <div className={style.card}>
          <img src="./New folder/service2.png" alt="" />
          <p>Rent Machinary</p>
        </div>
      </div>
    </div>
  )
}

export default AgriServices