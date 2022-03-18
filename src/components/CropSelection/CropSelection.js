import React from 'react'
import style from './CropSelection.module.css'
import { useNavigate } from 'react-router-dom'

const CropSelection = () => {

  const navigate = useNavigate()

  const data1 = [{
    img1: "../New folder/oil_seeds.PNG",
    name: "Soyabean"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Sesame"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Ground Nut"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Mustard"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Caster"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Sunflower"
  },
  {
    img1: "../New folder/oil_seeds.PNG",
    name: "Sunflower"
  },
  ]

  const data2 = [{
    img1: "../New folder/pulses.PNG",
    name: "Pigeon Pea (Tur)"
  },
  {
    img1: "../New folder/pulses.PNG",
    name: "Gram"
  },
  {
    img1: "../New folder/pulses.PNG",
    name: "Green Gram"
  },
  {
    img1: "../New folder/pulses.PNG",
    name: "Urid Bean (Urad)"
  },
  {
    img1: "../New folder/pulses.PNG",
    name: "Kidney Beans"
  }
  ]

  const data3 = [{
    img1: "../New folder/fruits.PNG",
    name: "Apple"
  },
  {
    img1: "../New folder/fruits.PNG",
    name: "Banana"
  },
  {
    img1: "../New folder/fruits.PNG",
    name: "Gauva"
  },
  {
    img1: "../New folder/fruits.PNG",
    name: "Orange"
  },
  {
    img1: "../New folder/fruits.PNG",
    name: "Watermellon"
  }
  ]
  const data4 = [{
    img1: "../New folder/vegetable.PNG",
    name: "Ginger"
  },
  {
    img1: "../New folder/vegetable.PNG",
    name: "Cabbage"
  },
  {
    img1: "../New folder/vegetable.PNG",
    name: "Carrot"
  },
  {
    img1: "../New folder/vegetable.PNG",
    name: "Eggplant"
  },
  {
    img1: "../New folder/vegetable.PNG",
    name: "Onion"
  }
  ]

  return (
    <div className={style.main}>
      <div className={style.header}>
        <img src="../New folder/backbutton.PNG" alt="" />
        <p>Select your crops</p>
      </div>
      <div className={style.crop__wrapper}>
        <h4>Oil Seeds</h4>
        <div className={style.crop__main}>
          {data1.map((crop, index) => {
            return (
              <div className={style.crop} key={index}>
                <img src={crop.img1} alt="" />
                <p>{crop.name}</p>
              </div>
            )
          }
          )}
        </div>

        <h4 style={{ marginTop: "3rem" }}>Pulses</h4>
        <div className={style.crop__main}>
          {data2.map((crop, index) => {
            return (
              <div className={style.crop} key={index}>
                <img src={crop.img1} alt="" />
                <p>{crop.name}</p>
              </div>
            )
          }
          )}
        </div>
        <h4 style={{ marginTop: "3rem" }}>Fruits</h4>
        <div className={style.crop__main}>
          {data3.map((crop, index) => {
            return (
              <div className={style.crop} key={index}>
                <img src={crop.img1} alt="" />
                <p>{crop.name}</p>
              </div>
            )
          }
          )}
        </div>
        <h4 style={{ marginTop: "3rem" }}>Vegetable</h4>
        <div className={style.crop__main}>
          {data4.map((crop, index) => {
            return (
              <div className={style.crop} key={index}>
                <img src={crop.img1} alt="" />
                <p>{crop.name}</p>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className={style.btn__div}>
        <button onClick={() => navigate("/app")} className={style.btn}>Confirm</button>
      </div>
    </div>
  )
}

export default CropSelection