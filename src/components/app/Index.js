import React from 'react'
import Header from '../header/Header'
import css from "./Index.module.css"
import About from '../about/About'
import Weather from '../weather/Weather'
import Market from '../MarketViews/Market'
import News from '../News/News'
import AgriServices from '../News/AgriServices'
import Footer from '../footer/Footer'

const index = () => {
  return (
    <div className={css.main}>
      <Header />
      <About />
      <Weather />
      <Market />
      <AgriServices />
      <News />
      <Footer />
    </div>
  )
}

export default index