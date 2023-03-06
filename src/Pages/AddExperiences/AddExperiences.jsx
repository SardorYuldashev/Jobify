import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loadUserInfo } from '../../store/slices/user'
import classes from './addexperiences.module.scss'

const AddExperiences = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [values, setValues] = useState({
    title: "",
    company: "",
    from: "",
    to: "",
    location: "",
    description: "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function addExperience(e) {
    e.preventDefault()

    if (!values.title || !values.company || !values.from) {
      return toast("Title, Company va Date bo'limlari to'ldirilishi shart", { type: "error" })
    }

    try {
      let { data } = await axios.put("/profile/experience", values)
      if (data) {

        dispatch(loadUserInfo(data))
        localStorage.setItem("userInfo", JSON.stringify(data))
        setValues({ title: "", company: "", from: "", to: "", location: "", description: "" })
        toast("Ish joyi qo'shildi", { type: "info" })
        navigate(-1)
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.message)
          toast(error.response.data.message, { type: "error" })
        error.response.data.errors?.forEach((err) =>
          toast(`${err.param} ${err.msg}`, { type: "error" }))
      }
    }
  }


  return (
    <div className={classes["addexperiences"]}>
      <div className="container">
        <div className={classes["addexperiences__content"]}>

          <div className={classes["addexperiences__content-buttons"]}>
            <Link to="/dashboard" className={classes["addexperiences__content-btn"]}>
              {t("backDashboard")}
            </Link>
          </div>

          <p className={classes["addexperiences__content-title"]}>
            {t("addExp")}
          </p>


          <form onSubmit={addExperience} className={classes["addexperiences__content-form"]}>

            {/* Tepa qismi */}
            <div className={classes["addexperiences__content-wrapper"]}>

              {/* Left block */}
              <div className={classes["addexperiences__content-left"]}>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]}
                    htmlFor="title">
                    {t("title")}
                  </label>
                  <input className={classes["addexperiences__content-input"]}
                    type="text"
                    name='title'
                    id='title'
                    placeholder='Senior Developer'
                    value={values.title}
                    onChange={handleInpChange} />
                </div>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]}
                    htmlFor="from">
                    {t("date")}
                  </label>

                  <div className={classes["addexperiences__content-inputs"]}>


                    <input className={classes["addexperiences__content-inputDate"]}
                      type="date"
                      name='from'
                      id='from'
                      value={values.from}
                      onChange={handleInpChange} />


                    <span>{t("to")}</span>

                    <label className={classes["addexperiences__content-inputCheckLabel"]}
                      htmlFor="checkbox">
                      {t("current")}
                    </label>

                    <input className={classes["addexperiences__content-inputCheck"]}
                      type="checkbox"
                      name='checkbox'
                      id='checkbox' />

                    <input className={classes["addexperiences__content-inputDate"]}
                      type="date"
                      name='to'
                      id='to'
                      value={values.to}
                      onChange={handleInpChange} />
                  </div>
                </div>

              </div>

              {/* Right block */}
              <div className={classes["addexperiences__content-right"]}>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]}
                    htmlFor="company">
                    {t("company")}
                  </label>
                  <input className={classes["addexperiences__content-input"]}
                    type="text"
                    name='company'
                    id='company'
                    placeholder='Apple'
                    value={values.company}
                    onChange={handleInpChange} />
                </div>

                <div className={classes["addexperiences__content-item"]}>
                  <label className={classes["addexperiences__content-label"]}
                    htmlFor="location">
                    {t("location")}
                  </label>
                  <input className={classes["addexperiences__content-input"]}
                    type="text"
                    name='location'
                    id='location'
                    placeholder='One Apple Park Way; Cupertino, CA 95014, U.S.A.'
                    value={values.location}
                    onChange={handleInpChange} />
                </div>

              </div>

            </div>

            <div className={classes["addexperiences__content-description"]}>
              <label htmlFor="textarea">
                {t("description")}
              </label>
              <textarea className={classes["addexperiences__content-textarea"]}
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder='Tell us a little about the experience...'
                value={values.description}
                onChange={handleInpChange} >
              </textarea>
            </div>

            <div className={classes["addexperiences__content-buttons"]}>
              <button type='submit' className={classes["addexperiences__content-add"]}>
                {t("add")}
              </button>
            </div>



          </form>
        </div>
      </div>
    </div>
  )
}

export default AddExperiences