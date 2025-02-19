import Card from '../Card/Card.jsx'
import style from'./Cards.module.css'


function Cards({ data }) {
    console.log(data);
    return (
        <div id={style.card}>
            {
                data.map((el) => {
                    return (<Card el={el} key={el.id} />)
                })
            }
        </div>
    )
}

export default Cards