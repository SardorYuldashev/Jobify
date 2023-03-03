import React from 'react'
import { Link } from 'react-router-dom'
import classes from './afterReg.module.scss'

const AfterReg = () => {
  return (
    <>
      <ul className={classes["header__nav-list"]}>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/dashboard">Dashboard</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/myjobs">My jobs</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/explore">Explore</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <button className={classes["header__nav-btn"]}>Logout</button>
        </li>

      </ul>
    </>
  )
}

export default AfterReg