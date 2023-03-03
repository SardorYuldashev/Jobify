import React from 'react'
import { Link } from 'react-router-dom'
import classes from './myjobs.module.scss'

const MyJobs = () => {
  return (
    <div className={classes["myjobs"]}>
      <div className="container">
        <div className={classes["myjobs__content"]}>
          <p className={classes["myjobs__content-title"]}>
            Do you want to create a job opportunities?
          </p>
          <p className={classes["myjobs__content-text"]}>
            Enter necessary details and submit
          </p>

          <form className={classes["myjobs__content-form"]}>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]} htmlFor="job" >Job title</label>
              <input className={classes["myjobs__content-input"]} type="text" name='job' id='job' placeholder='Senior rect developer' />
            </div>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]} htmlFor="description">Job description</label>
              <textarea className={classes["myjobs__content-input"]} name="description" id="description" cols="30" rows="10" placeholder='Tell a little bit about job requirements and benefits...'></textarea>
            </div>

            <button className={classes["myjobs__content-btn"]}>Submit</button>
          </form>

          <p className={classes["myjobs__content-title"]}>
            Jobs you posted
          </p>


          <ul className={classes["myjobs__content-list"]}>

            <li className={classes["myjobs__content-li"]}>

              <Link to="/jobs" className={classes["myjobs__content-info"]}>
                <h2 className={classes["myjobs__content-theme"]}>Title</h2>
                <p className={classes["myjobs__content-text"]}>Text</p>
              </Link>

              <div className={classes["myjobs__content-buttons"]}>

                <div className={classes["myjobs__content-left"]}>
                  <button className={classes["myjobs__content-btn"]}>Like <span>0</span></button>
                  <button className={classes["myjobs__content-btn"]}>Views <span>0</span></button>
                </div>

                <div className={classes["myjobs__content-right"]}>
                  <button className={classes["myjobs__content-apply"]}>Apply</button>
                </div>

              </div>


            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyJobs