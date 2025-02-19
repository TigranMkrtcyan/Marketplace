import { useParams } from 'react-router-dom'
import style from './Product.module.css'

function Product(props) {

  const { id } = useParams()
  
  const prod = props.data.find((el) => el.id === +id)

  

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