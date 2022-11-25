import React from 'react'

function UserCard({ users }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
      <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
        <img
          src={
            users?.user_img
              ? users?.user_img
              : 'https://i.ibb.co/F6Nr8W3/not-Found-Img.webp'
          }
          loading="lazy"
          alt=" by Radu Florin"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div>
        <div className="text-indigo-500 md:text-lg font-bold text-center">
          {users.name}
        </div>
        <p className="text-gray-500 capitalize text-sm md:text-base text-center mb-3 md:mb-4">
          User Role -{users.userRole}
        </p>

        <div className="flex justify-center">
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
