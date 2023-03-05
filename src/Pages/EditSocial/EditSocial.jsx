import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import classes from './editsocial.module.scss'
import { useSelector } from 'react-redux';

const EditSocial = () => {
  const navigate = useNavigate()
  let { info } = useSelector(({ user }) => user)
  let socialLinks = info.social

  const [values, setValues] = useState({
    youtube: socialLinks.youtube || "",
    twitter: socialLinks.twitter || "",
    instagram: socialLinks.instagram || "",
    linkedin: socialLinks.linkedin || "",
    facebook: socialLinks.facebook || "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    async function putSocial() {
      try {
        let { data } = await axios.put("/profile/socials", values)
        toast("Ijtimoiy tarmoqlar qo'shildi", { type: "info" })
        navigate("/dashboard")
      } catch (error) {
        toast("Tarmoqda xatolik yuz berdi", { type: "error" })
      }


    }
    putSocial()

  }





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

          <form onSubmit={handleSubmit} className={classes["editsocial__content-form"]}>


            {/* Left */}
            <div className={classes["editsocial__content-box"]}>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]}
                  htmlFor="facebook">
                  Facebook
                </label>
                <input className={classes["editsocial__content-input"]}
                  type="text"
                  name='facebook'
                  id='facebook'
                  value={values.facebook}
                  onChange={handleInpChange} />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]}
                  htmlFor="twitter">
                  Twitter
                </label>
                <input className={classes["editsocial__content-input"]}
                  type="text"
                  name='twitter'
                  id='twitter'
                  value={values.twitter}
                  onChange={handleInpChange} />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]}
                  htmlFor="linkedin">
                  Linkedin
                </label>
                <input className={classes["editsocial__content-input"]}
                  type="text"
                  name='linkedin'
                  id='linkedin'
                  value={values.linkedin}
                  onChange={handleInpChange} />
              </div>

            </div>



            {/* Right */}
            <div className={classes["editsocial__content-box"]}>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]}
                  htmlFor="instagram">
                  Instagram
                </label>
                <input className={classes["editsocial__content-input"]}
                  type="text"
                  name='instagram'
                  id='instagram'
                  value={values.instagram}
                  onChange={handleInpChange} />
              </div>

              <div className={classes["editsocial__content-item"]}>
                <label className={classes["editsocial__content-label"]}
                  htmlFor="youtube">
                  You Tube
                </label>
                <input className={classes["editsocial__content-input"]}
                  type="text"
                  name='youtube'
                  id='youtube'
                  value={values.youtube}
                  onChange={handleInpChange} />
              </div>

              <div className={classes["editsocial__content-save"]}>
                <button className={classes["editsocial__content-saveBtn"]}>
                  Save
                </button>
              </div>

            </div>
          </form>

          <p className={classes["editsocial__content-text"]}>
            **Not required to write: "https://"
          </p>
        </div>
      </div>
    </div>
  )
}

export default EditSocial