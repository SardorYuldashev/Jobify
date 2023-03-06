import React from 'react'
import { Link } from 'react-router-dom'
import AfterReg from '../AfterReg/AfterReg'
import BeforeReg from '../BeforeReg/BeforeReg'
import classes from "./header.module.scss"
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t, i18n: { language, changeLanguage } } = useTranslation()

  function handleChangeLng () {
    changeLanguage(language === "EN" ? "UZ" : "EN")
  }

  let { token } = useSelector(({ user }) => user)
  let { isCompleted } = useSelector(({ user }) => user)


  return (
    <header className={classes["header"]}>
      <div className="container">
        <nav className={classes["header__nav"]}>

          <Link to={token && !isCompleted ? "/dashboard" : "/"} className={classes["header__nav-logo"]}>Jobify</Link>


          <div className={classes["header__nav-buttons"]}>
            <button onClick={handleChangeLng} className={classes["header__nav-btn"]}>
              { language === "EN" ? "UZ" : "EN"}
            </button>


            {token || isCompleted ? <AfterReg /> : <BeforeReg />}
          </div>

        </nav>
      </div>

    </header>
  )
}

export default Header