import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function SellerDashboard() {
  let activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',

    borderRadius: '5px',
  }
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="my-10 ">
          <div className="flex overflow-hidde">
            <div className="hidden md:flex md:flex-shrink-0 ">
              <div className="flex flex-col w-64 bg-blue-100 rounded-md">
                <ul className="flex flex-col round rounded-md py-12 gap-1 ">
                  <NavLink
                    to="your-laptops"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    Your Laptops
                  </NavLink>
                  <NavLink
                    to="add-laptop"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    Add new Laptop
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="flex flex-col flex-1 w-0 overflow-hidden">
              <main className="relative flex-1 bg-blue-100 rounded-md ml-4 overflow-y-auto focus:outline-none p-4">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
