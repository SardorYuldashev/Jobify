import React from 'react'
import { useSelector } from 'react-redux'
import AfterProfile from '../../Components/AfterProfile'
import BeforeProfile from '../../Components/BeforeProfile'
import { localTokenKey } from '../../Components/Constants'
import classes from './dashboard.module.scss'

const Dashboard = () => {
  let token = localStorage.getItem(localTokenKey)

  const { user} = useSelector((user) => user)

  console.log(user);



  // let profile = true
  return (
    <div className={classes["dashboard"]}>
      <div className="container">

        {token &&  user.isCompleted ? <AfterProfile /> : <BeforeProfile />}

      </div>
    </div>
  )
}

export default Dashboard