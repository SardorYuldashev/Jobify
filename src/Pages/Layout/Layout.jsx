import axios from 'axios'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { localTokenKey } from '../../Components/Constants'
import Header from '../../Components/Header/Header'
import classes from './layout.module.scss'

const Layout = () => {

  
  



  let token = localStorage.getItem(localTokenKey)

  return token ? <div className={classes['layout']}>
    <Header />
    <Outlet />
  </div> : <Navigate to="/login" />

}

export default Layout