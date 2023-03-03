import React from 'react'
import classes from './educations.module.scss'

const Educations = () => {
  return (
    <div className={classes["educations"]}>
      <ul className={classes["educations__list"]}>

        <li className={classes["educations__list-li"]}>
          <div className={classes["educations__list-info"]}>

            <h2 className={classes["educations__list-title"]}>
              <span className={classes["educations__list-degree"]}>Master</span>
              <span> degree at </span>
              <span className={classes["educations__list-school"]}>Stanford</span>
            </h2>

            <p className={classes["educations__list-text"]}>
              From: 01/01/2001
            </p>

            <p className={classes["educations__list-text"]}>
              Until: 02/02/2002
            </p>

            <p className={classes["educations__list-text"]}>
              Location: USA
            </p>

            <p className={classes["educations__list-text"]}>
              Description: Yes
            </p>
          </div>

          <div className={classes["educations__list-btn"]}>
            Delete
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Educations