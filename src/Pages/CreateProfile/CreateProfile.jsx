import axios from 'axios'
import React from 'react'
import classes from './createprofile.module.scss'

const CreateProfile = () => {



  return (
    <div className={classes["createProfile"]}>
      <div className="container">
        <div className={classes["createProfile__content"]}>
          <p className={classes["createProfile__content-info"]}>
            * = required fields
          </p>

          <form className={classes["createProfile__content-form"]}>

            <div className={classes["createProfile__content-formTop"]}>
              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="status">* Work Status</label>

                  <select className={classes["createProfile__content-input"]} name="status" id="status">
                    

                    <option className={classes["createProfile__content-option"]} value="first">Select your work status</option>

                    <option className={classes["createProfile__content-option"]} value="second">Open to work</option>

                    <option className={classes["createProfile__content-option"]} value="third">Open to hire</option>

                    <option className={classes["createProfile__content-option"]} value="fourth">Looking for new opportunites</option>
                  </select>

                  <p className={classes["createProfile__content-text"]}>
                    Select the best option that fits you
                  </p>
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="company">Company</label>

                  <input className={classes["createProfile__content-input"]} type="text" name='company' id='company' placeholder='Apple Inc.' />
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="website">Website</label>

                  <input className={classes["createProfile__content-input"]} type="text" name='website' id='website' placeholder='apple.com' />

                  <p className={classes["createProfile__content-text"]}>
                    You do not need to specify https protocol
                  </p>
                </div>

              </div>

              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="skills">* Skills</label>

                  <input className={classes["createProfile__content-input"]} type="text" name='skills' id='skills' placeholder='HTML, CSS, JS' />

                  <p className={classes["createProfile__content-text"]}>
                    Separate each skill with comma(,)
                  </p>
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="location">Location</label>

                  <input className={classes["createProfile__content-input"]} type="text" name='location' id='location' placeholder='One Apple Park Way;  Cupertino , CA 95014 , U.S.A' />
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]} htmlFor="github">Github user name</label>

                  <input className={classes["createProfile__content-input"]} type="text" name='github' id='github' placeholder='apple' />

                  <p className={classes["createProfile__content-text"]}>
                    You need to specify only username (without https://github.com)
                  </p>
                </div>
              </div>
            </div>

            <div className={classes["createProfile__content-formBottom"]}>
              <label className={classes["createProfile__content-label"]} htmlFor="bio">Bio</label>

              <textarea className={classes["createProfile__content-input"]} name="bio" id="bio" cols="30" rows="10"></textarea>

              <p className={classes["createProfile__content-text"]}>
                You may say about your recent experience or what you are up to.
              </p>
            </div>

            <button className={classes["createProfile__content-btn"]}>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProfile