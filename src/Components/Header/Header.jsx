import React from 'react'
import { Link } from 'react-router-dom'
import AfterReg from '../AfterReg/AfterReg'
import BeforeReg from '../BeforeReg/BeforeReg'
import classes from "./header.module.scss"
import { localTokenKey } from './../Constants/index';

const Header = () => {

  let token = localStorage.getItem(localTokenKey)


  return (
    <header className={classes["header"]}>
      <div className="container">
        <nav className={classes["header__nav"]}>

          <Link to="/" className={classes["header__nav-logo"]}>Jobify</Link>

          {token ? <AfterReg /> : <BeforeReg />}

        </nav>
      </div>

    </header>
  )
}

export default Header