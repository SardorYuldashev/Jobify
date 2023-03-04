import React from 'react'
import { Link } from 'react-router-dom'
import AfterReg from '../AfterReg/AfterReg'
import BeforeReg from '../BeforeReg/BeforeReg'
import classes from "./header.module.scss"
import { localTokenKey } from './../Constants/index';
import { useSelector } from 'react-redux'

const Header = () => {

  // let token = localStorage.getItem(localTokenKey)

  let { token } = useSelector(({user}) => user)
  let { isCompleted } = useSelector(({user}) => user) 


  return (
    <header className={classes["header"]}>
      <div className="container">
        <nav className={classes["header__nav"]}>

          <Link to="/" className={classes["header__nav-logo"]}>Jobify</Link>

          {token || isCompleted ? <AfterReg /> :   <BeforeReg />}

        </nav>
      </div>

    </header>
  )
}

export default Header