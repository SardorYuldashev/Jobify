import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AfterProfile from '../../Components/AfterProfile'
import BeforeProfile from '../../Components/BeforeProfile'
import classes from './dashboard.module.scss'
import axios from 'axios'
import { loadUserCompleted, loadUserEmail, loadUserID, loadUserInfo, loadUserName } from '../../store/slices/user'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [udachno, setUdachno] = useState(false)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    (async function getUserName() {
      let { data } = await axios.get('/auth')
      if (data) {
        dispatch(loadUserEmail(data.email))
        dispatch(loadUserName(data.name))
        dispatch(loadUserID(data._id))
        localStorage.setItem("userEmail", data.email)
        localStorage.setItem("userName", data.name)
        localStorage.setItem("userID", data._id)
      }
    })()

    async function getFull() {
      try {
        setloading(true)
        let { data } = await axios.get('/profile/me')
        if (data) {
          dispatch(loadUserCompleted(true))
          localStorage.setItem("isCompleted", true)
          localStorage.setItem("userInfo", JSON.stringify(data))
          dispatch(loadUserInfo(data))
          setUdachno(true)
          setloading(false)
        }

      } catch (error) {
        dispatch(loadUserCompleted(false))
        localStorage.setItem("isCompleted", false)
        setUdachno(false)
        setloading(false)

      }
    }
    getFull()

  }, [udachno])

  let { token } = useSelector(({ user }) => user)
  let { isCompleted } = useSelector(({ user }) => user)

  return (
    <div className={classes["dashboard"]}>
      <div className="container">
        {loading ? <h2>{t("loading")}</h2> : token && udachno && isCompleted ? <AfterProfile /> : <BeforeProfile />}
      </div>
    </div>
  )
}

export default Dashboard