import React from 'react'
import style from './Auth.module.css'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const navigate = useNavigate()

  return (
    <div className={style.wrapper}>

      <div className={style.main}>
        <div className={style.backbutton}>
          <img src="./New folder/backbutton.PNG" alt="" />
        </div>
        <div className={style.logo}>
          <img src="./New folder/logo.PNG" alt="" />
          <p>Hi <span>Mkulima</span>!</p>
        </div>
        <div className={style.details}>
          <strong>Enter your mobile number</strong>
          <p>We will send you <strong>4 digit</strong> verification code</p>
          <input type="number" />
          <button onClick={() => navigate("/Setup/location")}>Sign Up</button>
        </div>
        <div className={style.options}>
          <span>Or</span>
          <hr />
          <p>Sign Up with</p>
        </div>
        <div className={style.btn}>
          <button> <span><img src="./New folder/google.PNG" alt="" /></span>Google</button>
          <button><span><img src="./New folder/facebook.PNG" alt="" /></span>Facebook</button>

        </div>
      </div>
    </div>
  )
}

export default Auth