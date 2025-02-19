import style from './Items.module.css'


function Items(props) {
    return(
        <div className={style.items}>
            <div className={style.item}>Home</div>
            <div className={style.item}>Category</div>
            <div className={style.item}>Popular</div>
            <div className={style.item}>Contacts</div>
        </div>
    )
}

export default Items