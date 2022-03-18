import React from 'react'
import css from './SetUp.module.css'
import { useNavigate } from 'react-router-dom'

const Location = () => {

  const navigate = useNavigate()

  return (
    <div className={css.wrapper}>
      <h3>Location Access</h3>
      <img src="../New folder/location_icon.PNG" alt="" />
      <h4>Enable Precise Location</h4>
      <p>Your location will be used to show you personalised information</p>
      <button onClick={() => navigate('/Setup/crop-selection')}>Enable</button>
    </div>
  )
}

export default Location