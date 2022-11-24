import React from 'react'
import { ToastContainer } from 'react-toastify'
import AllCategoyProduct from './AllCategoyProduct'
import Testemonial from './Testemonial'

function Home() {
  return (
    <div>
      {/* <ToastContainer /> */}
      <AllCategoyProduct />
      <Testemonial />
    </div>
  )
}

export default Home
