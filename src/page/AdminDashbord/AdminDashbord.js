import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function AdminDashbord() {
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
                    to="all-category"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    All Category
                  </NavLink>
                  <NavLink
                    to="all-laptops"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    All Laptops
                  </NavLink>
                  <NavLink
                    to="all-users"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    All Users
                  </NavLink>
                  <NavLink
                    to="all-sellers"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="p-3 bg-slate-300 hover:bg-black hover:text-white rounded-md"
                  >
                    All Sellers
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

export default AdminDashbord
