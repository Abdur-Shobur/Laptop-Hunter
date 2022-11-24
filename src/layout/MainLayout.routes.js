import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/nav/Nav'
import Footer from '../page/footer/Footer'

function MainLayoutRoutes() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayoutRoutes
