import React from 'react'
import { useSelector } from 'react-redux'
import AfterProfile from '../../Components/AfterProfile'
import BeforeProfile from '../../Components/BeforeProfile'
import { localTokenKey } from '../../Components/Constants'
import classes from './dashboard.module.scss'
import Login from './../Login/index';

const Dashboard = () => {

  

















  let { token } = useSelector(({user}) => user)
  let { isCompleted } = useSelector(({user}) => user) 


  return (
    <div className={classes["dashboard"]}>
      <div className="container">

        {token ?? isCompleted ? <AfterProfile /> : <BeforeProfile />}

      </div>
    </div>
  )
}

export default Dashboard