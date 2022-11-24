import React from 'react'

function Categorycard({ category }) {
  const { _id, category_name } = category
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div className="h-full flex items-center bg-[#81C6E8] border-blue-300 shadow-md border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center border-2 border-blue-100 flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow">
            <h2 className="text-black title-font font-medium">
              {category_name}
            </h2>
            <p className="text-gray-700">Total Products {0}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categorycard
