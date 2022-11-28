import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import './Card.css'
function Categorycard({ category, refetch }) {
  const location = useLocation()
  const [count_porduct, set_count_porudct] = useState(0)
  const [select, setSelected] = useState([])
  const { _id, category_name, category_img } = category

  useEffect(() => {
    fetch(`http://localhost:5000/laptops/count?id=${_id}`)
      .then((data) => data.json())
      .then((result) => set_count_porudct(result))
  }, [_id])

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
    <Link
      to={`/shop/category-details/${_id}`}
      className="p-2 w-full cursor-pointer relative  category_hide"
    >
      {location.pathname === '/admin-dashboard/all-category' && (
        <div className=" absolute right-2">
          <MdDeleteForever
            className="text-3xl text-red-500 hover:text-red-600 hidden show_icons_hov"
            onClick={() => seleted_hendaler(_id)}
          />
        </div>
      )}
      <div className="h-full flex items-center bg-[#81C6E8] hover:bg-[#4eb9ef] transition-all border-blue-300 shadow-md border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center border-2 border-blue-100 flex-shrink-0 rounded-full mr-4"
          src={category_img}
        />
        <div className="flex-grow">
          <h2 className="text-black title-font font-medium">{category_name}</h2>
          <p className="text-gray-700">Total Products {count_porduct.length}</p>
        </div>
      </div>
    </Link>
  )
}

export default Categorycard
