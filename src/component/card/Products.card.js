import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import './Product.Card.css'
function ProductsCard({ laptops }) {
  const { laptop_name, price, brand_name, laptop_photo } = laptops
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer relative hidden_element">
        <div className=" absolute right-2 show_element hidden bg-black rounded-tr-lg rounded  ">
          <FcDeleteDatabase
            title="delete"
            className="text-4xl text-red-500 hover:text-red-600"
          />
        </div>

        <div className="h-full flex items-center bg-[#81C6E8] hover:bg-[#4eb9ef] transition-all border-blue-300 shadow-md border p-4 rounded-lg">
          <img
            alt="laptop"
            className="w-16 h-16 bg-gray-100 object-cover object-center border-2 border-blue-100 flex-shrink-0 rounded-full mr-4"
            src={laptop_photo}
          />
          <div className="flex-grow">
            <h2 className="text-black title-font font-medium">{laptop_name}</h2>
            <p className="text-gray-700">{brand_name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsCard
