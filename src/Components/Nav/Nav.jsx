import Items from "../Items/Items"
import style from "./Nav.module.css"

function Nav(props) {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <div className={style.lname}>SHOP</div>
      </div>
      <Items />
      <input type="search" placeholder="Search" id={style.src} />
    </div>
  )
}

export default Nav
