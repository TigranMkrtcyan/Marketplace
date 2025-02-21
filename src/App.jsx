import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Cards from './Components/Cards/Cards'
import Loyout from './Components/Loyout/Loyout'
import Product from './Components/Product/Product'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((rej) => alert("Error fetching product",rej))
  }, [])

  return (
    <>
      {data.length === 0 ?
        <div className='loader-container'>
          <div className="loader"></div>
        </div>
        :

        <Routes >
          <Route path='/' element={<Loyout />}>
            <Route index element={<Cards data={data} />} />
            <Route path='/products/:id' element={<Product />} />
          </Route>
        </Routes>}
    </>
  )
}

export default App
