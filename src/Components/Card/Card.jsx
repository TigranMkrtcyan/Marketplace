import React, { useState } from "react"
import star from '../../assets/star.svg'

import style from './Card.module.css'
import { NavLink } from "react-router-dom"

function Card(props) {
  
  let [Count, setCount] = useState(1)
  let [Arr, setArr] = useState(props.el.rating.count)

  let plus = () => {
    if (Count >= props.el.rating.count) {
      return;
    }
    setCount(Count + 1)
  }

  let minus = () => {
    if (Count <= 1) {
      return;
    } else {
      setCount(Count - 1)
    }
  }

  let buy = () => {
    if (Arr < Count) {
      return alert(`Not Available`);
    }
    setArr(Arr - Count)
    setCount(1)
  }
  return (
    <>
      {
        <div className={style.card}>
          <div className={style.imgs}>
            <NavLink to={`/products/${props.el.id}`}>
              <img src={props.el.image} alt="" className={style.img} />
            </NavLink>
          </div>
          <div className={style.box}>
            <NavLink to={`/products/${props.el.id}`}>
              <h2 className={style.h}>{props.el.title}</h2>
            </NavLink>
            <h3 className={style.cat}>Category - <span> {props.el.category}</span></h3>
            <p className={style.des}>{props.el.description}</p>
            <div className={style.pay}>
              <button className={style.btn} onClick={plus}>
                +
              </button>
              <h2 className={style.count}>{Count}</h2>
              <button className={style.btn} onClick={minus}>
                -
              </button>
            </div>
            <h2 className={style.price}>{Count * props.el.price}$</h2>
            <button className={style.buy} onClick={buy}>BUY</button>
            <div className={style.info}>
              <div className={style.rating}>
                <img
                  src={star} alt="" className={style.star} />
                <h3>{props.el.rating.rate}</h3>
              </div>
              <h3>in stock - <span className={style.stock}>{Arr}</span></h3>
            </div>
          </div>
        </div>
      }
    </>
  )
}


export default Card