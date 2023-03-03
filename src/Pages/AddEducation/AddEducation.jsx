import React from 'react'
import { Link } from 'react-router-dom'
import classes from './addeducation.module.scss'

const AddEducation = () => {
  return (
    <div className={classes["addeducations"]}>
      <div className="container">
        <div className={classes["addeducations__content"]}>

          <div className={classes["addeducations__content-buttons"]}>
            <Link to="/dashboard" className={classes["addeducations__content-btn"]}>
              Back to Dashboard
            </Link>
          </div>

          <p className={classes["addeducations__content-title"]}>
            Add Education
          </p>


          <form className={classes["addeducations__content-form"]}>

            {/* Tepa qismi */}
            <div className={classes["addeducations__content-wrapper"]}>

              {/* Left block */}
              <div className={classes["addeducations__content-left"]}>

                <div className={classes["addeducations__content-item"]}>
                  <label className={classes["addeducations__content-label"]} htmlFor="school">
                    School
                  </label>
                  <input className={classes["addeducations__content-input"]} type="text" name='school' id='school' placeholder='Stanford' />
                </div>

                <div className={classes["addeducations__content-item"]}>
                  <label className={classes["addeducations__content-label"]} htmlFor="date3">
                    Date
                  </label>

                  <div className={classes["addeducations__content-inputs"]}>

                    <input className={classes["addeducations__content-inputDate"]} type="date" name='date3' id='date3' />

                    <span>To</span>

                    <input className={classes["addeducations__content-inputDate"]} type="date" name='date4' id='date4' />
                    
                    <div>
                      <input type="checkbox" name='checkbox' id='checkbox' />
                      <label htmlFor="checkbox">Current</label>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right block */}
              <div className={classes["addeducations__content-right"]}>

                <div className={classes["addeducations__content-item"]}>
                  <label className={classes["addeducations__content-label"]} htmlFor="degree">
                    Degree
                  </label>
                  <input className={classes["addeducations__content-input"]} type="text" name='degree' id='degree' placeholder='Master' />
                </div>

                <div className={classes["addeducations__content-item"]}>
                  <label className={classes["addeducations__content-label"]} htmlFor="field">
                    Field of study
                  </label>
                  <input className={classes["addeducations__content-input"]} type="text" name='field' id='field' placeholder='Computer sciense' />
                </div>

              </div>

            </div>

            <div className={classes["addeducations__content-description"]}>
              <label htmlFor="textarea">Description</label>
              <textarea className={classes["addeducations__content-textarea"]} name="description" id="description" cols="30" rows="4" placeholder='Tell us a little about the education...'></textarea>
            </div>

            <div className={classes["addeducations__content-buttons"]}>
              <button className={classes["addeducations__content-add"]}>
                Add
              </button>
            </div>



          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEducation