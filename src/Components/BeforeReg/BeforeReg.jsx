import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import classes from './beforeReg.module.scss'

const BeforeReg = () => {

  const {t} = useTranslation()

  return (
    <>
      <ul className={classes["header__nav-list"]}>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/explore">{t("explore")}</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/register">{t("register")}</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/login">{t("login")}</Link>
        </li>

      </ul>
    </>
  )
}

export default BeforeReg