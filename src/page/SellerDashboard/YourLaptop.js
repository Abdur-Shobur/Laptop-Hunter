import React, { useContext } from 'react'
import LoadCategory from '../../context/LoadCategory'
import { PuffLoader } from 'react-spinners'
import { HiPlusSm } from 'react-icons/hi'
import ProductsCard from '../../component/card/Products.card'
import AddLaptopsModal from './AddLaptopsModal'
import { UserSystem } from '../../context/FirebaseContext'
import UsersLoad from '../../context/UsersLoad'
import AllLaptopLoad from '../../context/AllLaptopLoad'

function YourLaptop() {
  const { category, isLoading, refetch } = LoadCategory()
  const {
    laptops,
    isLoading: laptops_loading,
    refetch: laptop_refetch,
  } = AllLaptopLoad()
  const { user } = useContext(UserSystem)
  const { users_data } = UsersLoad(user?.email)

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
                Add new Laptop for Selling{' '}
                <HiPlusSm className="text-3xl text-white" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {laptops_loading && <PuffLoader color="#105bdb" />}
      </div>
      <div className="flex flex-wrap -m-2">
        {laptops?.map((e) => (
          <ProductsCard key={e._id} laptops={e} refetch={refetch} />
        ))}
      </div>
      <div>
        <AddLaptopsModal
          category={category}
          user={user}
          users_data={users_data}
        />
      </div>
    </div>
  )
}

export default YourLaptop
