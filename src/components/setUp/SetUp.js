import React, { useState, useEffect } from 'react'
import styles from './SetUp.module.css'
import { useNavigate } from 'react-router-dom';
const SetUp = () => {

  const [isLoaded, setisLoaded] = useState(false)
  const [TempVar, setTempVar] = useState()
  const [buttonState, setbuttonState] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true)
    }, 1500);
  }, [])

  const changeHandler = (e) => {
    setTempVar(e.target.value)
    setbuttonState(!buttonState)
  }

  const clickHandler = () => {
    navigate("/quickStart")
  }

  return (

    <>
      {console.log(TempVar)}
      {!isLoaded ?
        <div className={styles.loadingMain}>
          <img src="./New Folder/logo.PNG" alt="" />
          <p>Hi <span>Mkulima</span>!</p>
        </div>
        :
        <div className={styles.main}>
          <div className={styles.header}>
            <h4>Language</h4>
            <p>Choose your preffered Language</p>
          </div>

          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span  >A</span>
              <label>English</label>
            </div>

            <input type="radio" name='language' />
          </div>
          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span>B</span>
              <label>Bemba</label>
            </div>
            <input type="radio" name='language' />
          </div>
          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span>D</span>
              <label>Digo</label>
            </div>
            <input type="radio" name='language' />
          </div>
          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span>L</span>
              <label>Luguru</label>
            </div>
            <input type="radio" name='language' />
          </div>
          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span>H</span>
              <label>Haya</label>
            </div>
            <input type="radio" name='language' />
          </div>
          <div className={styles.languages}>
            <div className={styles.languages__span}>
              <span>N</span>
              <label>Nyamwezi</label>
            </div>
            <input type="radio" name='language' />
          </div>
          <div className={styles.termsandconditions}>
            <input type="checkbox" onChange={changeHandler} />
            <p>I agree to <span>terms of service</span> & <span>Privacy policy </span> and to share my location</p>
          </div>
          <button disabled={buttonState} onClick={clickHandler} className={styles.btn}>Accept</button>
        </div>
      }
    </>
  )
}

export default SetUp