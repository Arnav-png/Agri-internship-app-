import React from 'react'
import css from './Market.module.css'
import { useNavigate } from 'react-router-dom'
const Market = () => {

  const navigate = useNavigate()

  const market = [{
    img: "./New folder/oil_seeds.png",
    name: "Soyabean",
    price: "5600",
    mar: "down"
  },
  {
    img: "./New folder/pulses.png",
    name: "Pigeon Pea (Tur)",
    price: "8200",
    mar: "up"
  },
  {
    img: "./New folder/vegetable.png",
    name: "Wheat",
    price: "1700",
    mar: "up"
  },
  {
    img: "./New folder/fruits.png",
    name: "Cotton",
    price: "9600",
    mar: "down"
  },
  {
    img: "./New folder/oil_seeds.png",
    name: "Orange",
    price: "2500",
    mar: "up"
  },
  ]


  return (
    <div className={css.main}>
      <h4>Market Views</h4>
      {market.map((mar, index) => {
        return (
          <div onClick={() => navigate("/market")} className={css.card} key={index}>
            <div>
              <img src={mar.img} alt="" />
            </div>
            <div>
              <h5>{mar.name}</h5>
              <p>Songea , Ruvuma</p>
            </div>
            <div className={css.card__price}>
              <img src={mar.mar === 'up' ? "./New folder/icons8-up-arrow-50.png" : "./New folder/icons8-down-arrow-50.png"} alt="" />
              <p style={{ color: mar.mar === "up" ? "Green" : "goldenrod", fontWeight: "700" }}><span style={{ color: "black", fontSize: "10px" }}>Tsh</span> {mar.price}/Q</p>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Market