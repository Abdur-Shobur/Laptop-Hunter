import React from 'react'
import UserCard from '../../component/card/UserCard'
import AllUsersLoad from '../../context/AllUsersLoad'
import PuffLoader from 'react-spinners/PuffLoader'

function AllUsers() {
  const { all_users, isLoading, refetch } = AllUsersLoad('user')
  refetch()
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Meet our Team
            </h2>
          </div>

          <div>
            {isLoading ? (
              <div className="flex justify-center">
                <PuffLoader color="#36b0d6" />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                {all_users?.map((e) => (
                  <UserCard key={e._id} users={e} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers
