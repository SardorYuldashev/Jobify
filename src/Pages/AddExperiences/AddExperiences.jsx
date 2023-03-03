import React from 'react'
import { Link } from 'react-router-dom'
import classes from './addexperiences.module.scss'

const AddExperiences = () => {
  return (
    <div className={classes["addexperiences"]}>
      <div className="container">
        <div className={classes["addexperiences__content"]}>

          <div className={classes["addexperiences__content-buttons"]}>
            <Link to="/dashboard" className={classes["addexperiences__content-btn"]}>
              Back to Dashboard
            </Link>
          </div>

          <p className={classes["addexperiences__content-title"]}>
            Add Experience
          </p>


          <form className={classes["addexperiences__content-form"]}>

            {/* Tepa qismi */}
            <div className={classes["addexperiences__content-wrapper"]}>

              {/* Left block */}
              <div className={classes["addexperiences__content-left"]}>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]} htmlFor="title">
                    Titile
                  </label>
                  <input className={classes["addexperiences__content-input"]} type="text" name='title' id='title' placeholder='Senior Developer' />
                </div>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]} htmlFor="date1">
                    Date
                  </label>

                  <div className={classes["addexperiences__content-inputs"]}>

                    <input className={classes["addexperiences__content-inputDate"]} type="date" name='date1' id='date1' />
                    <span>To</span>
                    <input className={classes["addexperiences__content-inputDate"]} type="date" name='date2' id='date2' />
                    <div>
                      <input type="checkbox" name='checkbox' id='checkbox' />
                      <label htmlFor="checkbox">Current</label>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right block */}
              <div className={classes["addexperiences__content-right"]}>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]} htmlFor="company">
                    Company
                  </label>
                  <input className={classes["addexperiences__content-input"]} type="text" name='company' id='company' placeholder='Apple' />
                </div>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]} htmlFor="location">
                    Location
                  </label>
                  <input className={classes["addexperiences__content-input"]} type="text" name='location' id='location' placeholder='One Apple Park Way; Cupertino, CA 95014, U.S.A.' />
                </div>

              </div>

            </div>

            <div className={classes["addexperiences__content-description"]}>
              <label htmlFor="textarea">Description</label>
              <textarea className={classes["addexperiences__content-textarea"]} name="description" id="description" cols="30" rows="4" placeholder='Tell us a little about the experience...'></textarea>
            </div>

            <div className={classes["addexperiences__content-buttons"]}>
              <button className={classes["addexperiences__content-add"]}>
                Add
              </button>
            </div>



          </form>
        </div>
      </div>
    </div>
  )
}

export default AddExperiences