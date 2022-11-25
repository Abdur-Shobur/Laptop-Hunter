import React, { useContext } from 'react'
import { PuffLoader } from 'react-spinners'
import ProductsCard from '../../component/card/Products.card'
import { UserSystem } from '../../context/FirebaseContext'
import AllLaptopLoad from '../../context/AllLaptopLoad'

function YourLaptop() {
  const { user } = useContext(UserSystem)
  const { laptops, isLoading: laptops_loading } = AllLaptopLoad(user?.email)

  return (
    <div>
      <div className="flex justify-center">
        {laptops_loading && <PuffLoader color="#105bdb" />}
      </div>
      <div className="flex flex-wrap -m-2">
        {laptops?.map((e) => (
          <ProductsCard key={e._id} laptops={e} />
        ))}
      </div>
    </div>
  )
}

export default YourLaptop
