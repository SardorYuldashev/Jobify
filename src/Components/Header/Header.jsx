import React from 'react'
import { Link } from 'react-router-dom'
import AfterReg from '../AfterReg/AfterReg'
import BeforeReg from '../BeforeReg/BeforeReg'
import classes from "./header.module.scss"

const Header = () => {

  let num = !false // keyin o'chirib tashlanadi


  return (
    <header className={classes["header"]}>
      <div className="container">
        <nav className={classes["header__nav"]}>

          <Link to="/" className={classes["header__nav-logo"]}>Jobify</Link>

          {num ? <BeforeReg /> : <AfterReg />}
          
        </nav>
      </div>

    </header>
  )
}

export default Header