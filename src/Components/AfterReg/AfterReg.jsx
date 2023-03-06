import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loadUserCompleted, loadUserEmail, loadUserID, loadUserInfo, loadUserName, loadUserToken } from '../../store/slices/user'
import classes from './afterReg.module.scss'

const AfterReg = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {t} = useTranslation()


  function logOut () {
    let question = confirm("Siz rostdan ham chiqmoqchimisiz?")
    if (!question) return
    localStorage.clear()
    dispatch(loadUserCompleted(false))
    dispatch(loadUserEmail(null))
    dispatch(loadUserID(null))
    dispatch(loadUserInfo(null))
    dispatch(loadUserName(null))
    dispatch(loadUserToken(null))
    navigate("/")
  }




  return (
    <>
      <ul className={classes["header__nav-list"]}>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/dashboard">{t("dashboard")}</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/myjobs">{t("myJobs")}</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/explore">{t("explore")}</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <button onClick={logOut} className={classes["header__nav-btn"]}>{t("logout")}</button>
        </li>

      </ul>
    </>
  )
}

export default AfterReg