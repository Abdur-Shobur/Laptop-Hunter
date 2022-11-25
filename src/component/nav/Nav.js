import React, { useContext } from 'react'
import logoWhite from '../../media/img/laptop-hunter-logo white.png'
import logoDark from '../../media/img/laptop-hunter-logo-dark.png'
import logoBlue from '../../media/img/laptop-hunter-blue.png'
import svg_code from '../../media/img/nav-bg.svg'
import { UserSystem } from '../../context/FirebaseContext'
import Login from '../../page/Login/Login'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  const { user } = useContext(UserSystem)
  let activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: '#2563eb',
  }
  const nav_menu = (
    <>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
        className="m-2  text-xl font-bold"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
        className="m-2 text-xl font-bold"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
        className="m-2 text-xl font-bold"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
        className="m-2 text-xl font-bold"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/admin-dashboard"
        className="m-2 text-xl font-bold"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/seller-dahboard"
        className="m-2 text-xl font-bold"
      >
        Dashboard
      </NavLink>
    </>
  )
  return (
    <div
      className="bg-blue-100 shadow-lg"
      style={{ backgroundImage: `url(${svg_code})` }}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {nav_menu}
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-24" src={logoDark} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{nav_menu}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <Link to="/profile">
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span className="text-sm">Profile</span>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-blue-500 border-none hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
