import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"

function Loyout({data}) {
  return (
    <div>
      <Nav data = {data}/>
      <Outlet />
    </div>
  )
}

export default Loyout