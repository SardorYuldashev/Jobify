import React from 'react'
import { Link } from 'react-router-dom'
import classes from './beforeprofile.module.scss'

const BeforeProfile = () => {
  return (
    <div className={classes["profile"]}>
      <p className={classes["profile-title"]}>
        Hello, Person
      </p>

      <p className={classes["profile-text"]}>
        You have not created an profile yet.
      </p>

      <Link to="/create-profile" className={classes["profile-btn"]}>
        Create profile
      </Link>
    </div>
  )
}

export default BeforeProfile