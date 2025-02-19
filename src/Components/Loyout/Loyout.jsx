import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

function Loyout({data}) {
  return (
    <div>
      <Nav data = {data}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Loyout