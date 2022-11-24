import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import Categorycard from '../../component/card/Category.card'
import HeaderOne from '../../component/header/HeaderOne'
import Pragarphone from '../../component/pragraph/Pragarphone'
import proudcts_bg from '../../media/img/proudcts-bg.svg'
function AllCategoyProduct() {
  const [category, setCategory] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    fetch('http://localhost:5000/product-category')
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
      })
  }, [])
  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundImage: `url(${proudcts_bg})` }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <HeaderOne>Our All brands</HeaderOne>
          <Pragarphone>We Are selling this products</Pragarphone>
        </div>
        <div className="flex justify-center">
          {loader && <PuffLoader color="#105bdb" />}
        </div>
        <div className="flex flex-wrap -m-2">
          {category.map((e) => (
            <Categorycard key={e._id} category={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllCategoyProduct
