import React from 'react'
import classes from './experiences.module.scss'

const Experinces = () => {
  return (
    <div className={classes["experiences"]}>
      <ul className={classes["experiences__list"]}>

        <li className={classes["experiences__list-li"]}>
          <div className={classes["experiences__list-info"]}>

            <h2 className={classes["experiences__list-title"]}>
              <span className={classes["experiences__list-status"]}>Junior</span>
              <span> at </span>
              <span className={classes["experiences__list-company"]}>Microsoft</span>
            </h2>

            <p className={classes["experiences__list-text"]}>
              From: 01/01/2001
            </p>

            <p className={classes["experiences__list-text"]}>
              Until: 02/02/2002
            </p>

            <p className={classes["experiences__list-text"]}>
              Location: USA
            </p>

            <p className={classes["experiences__list-text"]}>
              Description: Yes
            </p>
          </div>

          <div className={classes["experiences__list-btn"]}>
            Delete
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Experinces