import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.main}>
      <div className={style.card1}>
        <div>
          <h5>How to use app</h5>
          <p>Learn about all he features of app</p>
          <img src="./New folder/play.png" alt="" />
        </div>
        <div>
          <img src="./New folder/phone_about.png" alt="" />
        </div>
      </div>
      <div className={style.card2}>
        <div>
          <h5>Contract Farming</h5>
          <p>Grow crops for hi kisan verified companies to make consistant profits</p>
          <button>Get Call</button>
        </div>
        <div>
          <img src="./New folder/phone_about2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About