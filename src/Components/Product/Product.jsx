import { useParams } from 'react-router-dom'
import style from './Product.module.css'
import { useEffect, useState } from 'react'

function Product() {
  const [prod,setProd] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => setProd(res))
        .catch((rej) => alert("Error fetching product",rej))
  }, [])

  

  return (
    <>
      <div className={style.card}>
        <img src={prod.image} alt="" />
        <div className={style.section}>
          <div className={style.box}>
            <h1 className={style.h}>{prod.title}</h1>
            <h3 className={style.cat}>Category - {prod.category}</h3>
          </div>
          <p className={style.des}>{prod.description}</p>
          <div className={style.pay}>
            <h2 className={style.price}>{prod.price}$</h2>
            <button className={style.buy} >BUY</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product