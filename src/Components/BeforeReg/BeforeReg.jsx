import React from 'react'
import { Link } from 'react-router-dom'
import classes from './beforeReg.module.scss'

const BeforeReg = () => {
  return (
    <>
      <ul className={classes["header__nav-list"]}>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/explore">Explore</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/register">Register</Link>
        </li>

        <li className={classes["header__nav-li"]}>
          <Link className={classes["header__nav-link"]} to="/login">Login</Link>
        </li>

      </ul>
    </>
  )
}

export default BeforeReg