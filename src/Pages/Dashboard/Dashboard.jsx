import React from 'react'
import AfterProfile from '../../Components/AfterProfile'
import BeforeProfile from '../../Components/BeforeProfile'
import { localTokenKey } from '../../Components/Constants'
import classes from './dashboard.module.scss'

const Dashboard = () => {
  // let token = localStorage.getItem("localTokenKey")
  let profile = true
  return (
    <div className={classes["dashboard"]}>
      <div className="container">

        {profile ? <AfterProfile /> : <BeforeProfile />}

      </div>
    </div>
  )
}

export default Dashboard