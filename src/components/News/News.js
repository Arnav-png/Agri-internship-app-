import React from 'react'
import style from './News.module.css'

const News = () => {
  return (
    <div className={style.news_main}>
      <div className={style.header}>
        <h4>Quick Reads</h4>
        <img src="./New folder/icons8-right-arrow-32.png" alt="" />
      </div>
      <div className={style.news}>
        <img src="./New folder/news.png" alt="" />
        <div className={style.news_text}>
          <p>Tomato at 1800/KG in Iringa and Rukwa as prices soar due to unseasonal rains...</p>
          <p>10 hour ago</p>
        </div>
      </div>
    </div>
  )
}

export default News