import React from 'react'
import { Link } from 'react-router-dom'
import classes from './notfound.module.scss'

const NotFound = () => {
  return (
    <div className={classes['notfound']}>
      <div className="container">
        <div className={classes['notfound__content']}>
          <h2 className={classes['notfound__content-title']}>
            UPS!!! Page not found
          </h2>
          <Link className={classes['notfound__content-btn']} to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound