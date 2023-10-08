import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import MobileNavbar from './Navbar/MobileNavbar'

const RootComponent = () => {
  return (
    <>
    <Navbar/>
    <MobileNavbar/>
    <Outlet/>
    </>
  )
}

export default RootComponent