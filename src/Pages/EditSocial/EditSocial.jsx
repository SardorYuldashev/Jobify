import React from 'react'
import { Link } from 'react-router-dom'
import classes from './editsocial.module.scss'

const EditSocial = () => {
  return (
    <div className={classes["editsocial"]}>
      <div className="container">
        <div className={classes["editsocial__content"]}>

          <div className={classes["editsocial__content-buttons"]}>
            <Link to="/dashboard" className={classes["editsocial__content-btn"]}>
              Back to Dashborad
            </Link>
          </div>

          <p className={classes["editsocial__content-title"]}>
            Your Social Links
          </p>

          <form className={classes["editsocial__content-form"]}>

            
            {/* Left */}
            <div className={classes["editsocial__content-box"]}>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]} htmlFor="facebook">
                  Facebook
                </label>
                <input className={classes["editsocial__content-input"]} type="text" name='facebook' id='facebook' />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]} htmlFor="twitter">
                  Twitter
                </label>
                <input className={classes["editsocial__content-input"]} type="text" name='twitter' id='twitter' />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]} htmlFor="linkedin">
                  Linkedin
                </label>
                <input className={classes["editsocial__content-input"]} type="text" name='linkedin' id='linkedin' />
              </div>

            </div>



            {/* Right */}
            <div className={classes["editsocial__content-box"]}>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]} htmlFor="instagram">
                  Instagram
                </label>
                <input className={classes["editsocial__content-input"]} type="text" name='instagram' id='instagram' />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]} htmlFor="youtube">
                  You Tube
                </label>
                <input className={classes["editsocial__content-input"]} type="text" name='youtube' id='youtube' />
              </div>

              <div className={classes["editsocial__content-save"]}>
                <button className={classes["editsocial__content-saveBtn"]}>Save</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditSocial