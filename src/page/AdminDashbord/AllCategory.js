import React, { useState } from 'react'
import Categorycard from '../../component/card/Category.card'
import LoadCategory from '../../context/LoadCategory'
import { PuffLoader } from 'react-spinners'
import { HiPlusSm } from 'react-icons/hi'
import AddCategoryModal from './AddCategoryModal'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function AllCategory() {
  const { category, data, isLoading, refetch } = LoadCategory()
  const [modalOpen, setToClose] = useState(true)
  // console.log(modalOpen)
  refetch(false)

  return (
    <div>
      <div>
        <div className="mb-10 w-full ">
          <div className="h-full flex items-center bg-[#81C6E8] border-blue-300 hover:bg-[#4eb9ef] transition-all shadow-md border p-4 rounded-lg">
            <div className="flex-grow">
              <label
                htmlFor="add_category_modal"
                className="text-black title-font font-medium flex items-center cursor-pointer"
              >
                Add new Category <HiPlusSm className="text-3xl text-white" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {isLoading && <PuffLoader color="#105bdb" />}
      </div>
      <div className="flex flex-wrap -m-2">
        {category?.map((e) => (
          <Categorycard key={e._id} category={e} refetch={refetch} />
        ))}
      </div>
      <div>
        {modalOpen && (
          <AddCategoryModal
            modalOpen={modalOpen}
            setToClose={setToClose}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  )
}

export default AllCategory
