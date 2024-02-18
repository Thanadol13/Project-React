import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Home1 from './Home1'

const Layout_1 = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default Layout_1

