import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AfterProfile from '../../Components/AfterProfile'
import BeforeProfile from '../../Components/BeforeProfile'
import classes from './dashboard.module.scss'
import axios from 'axios'
import { loadUserEmail, loadUserID, loadUserName } from '../../store/slices/user'

const Dashboard = () => {  
  const [userName, setUserName] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function getUserName () {
      let {data} = await axios.get('/auth')
      if(data) {
        dispatch(loadUserEmail(data.email))
        dispatch(loadUserName(data.name))
        dispatch(loadUserID(data._id))
        localStorage.setItem("userEmail", data.email)
        localStorage.setItem("userName", data.name)
        localStorage.setItem("userID", data._id)        
      }
    })()

  }, [])
  


















  let { token } = useSelector(({user}) => user)
  let { isCompleted } = useSelector(({user}) => user)

  return (
    <div className={classes["dashboard"]}>
      <div className="container">

        {token && isCompleted ? <AfterProfile /> : <BeforeProfile />}

      </div>
    </div>
  )
}

export default Dashboard