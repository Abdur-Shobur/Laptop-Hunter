import React, { useState } from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import swal from 'sweetalert'

function Categorycard({ category, refetch }) {
  const location = useLocation()
  const [select, setSelected] = useState([])
  const { _id, category_name } = category

  const seleted_hendaler = (e) => {
    const url = `http://localhost:5000/product-category/${e}`
    return swal({
      title: 'Are you sure?',
      text:
        'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(url, {
          method: 'DELETE',
        })
          .then((data) => {
            refetch()
            swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success',
            })
          })
          .catch((err) => console.log(err))
      } else {
        swal('Your imaginary file is safe!')
      }
    })
  }

  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer relative">
        {location.pathname === '/admin-dashboard/all-category' && (
          <div className=" absolute right-4">
            <FcDeleteDatabase
              className="text-4xl text-red-500 hover:text-red-600"
              onClick={() => seleted_hendaler(_id)}
            />
          </div>
        )}
        <div className="h-full flex items-center bg-[#81C6E8] hover:bg-[#4eb9ef] transition-all border-blue-300 shadow-md border p-4 rounded-lg">
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
