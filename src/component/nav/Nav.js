import React, { useContext } from 'react'
import logoWhite from '../../media/img/laptop-hunter-logo white.png'
import logoDark from '../../media/img/laptop-hunter-logo-dark.png'
import logoBlue from '../../media/img/laptop-hunter-blue.png'
import svg_code from '../../media/img/nav-bg.svg'
import { UserSystem } from '../../context/FirebaseContext'
import Login from '../../page/Login/Login'
import { Link } from 'react-router-dom'

function Nav() {
  const { user } = useContext(UserSystem)
  console.log(user)

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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="">
            <img className="w-24" src={logoDark} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
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
