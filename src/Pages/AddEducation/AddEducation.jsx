import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loadUserInfo } from '../../store/slices/user'
import classes from './addeducation.module.scss'

const AddEducation = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [values, setValues] = useState({
    school: "",
    degree: "",
    from: "",
    to: "",
    fieldofstudy: "",
    description: "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function addExperience(e) {
    e.preventDefault()

    if (!values.school || !values.degree || !values.from || !values.fieldofstudy) {
      return toast("School, Degree, Date va Field of Study bo'limlari to'ldirilishi shart", { type: "error" })
    }

    try {
      let { data } = await axios.put("/profile/education", values)
      if (data) {
        dispatch(loadUserInfo(data))
        localStorage.setItem("userInfo", JSON.stringify(data))
        setValues({ title: "", company: "", from: "", to: "", location: "", description: "" })
        toast("O'quv yurti qo'shildi", { type: "info" })
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
    <div className={classes["addeducation"]}>
      <div className="container">
        <div className={classes["addeducation__content"]}>

          <div className={classes["addeducation__content-buttons"]}>
            <Link to="/dashboard" className={classes["addeducation__content-btn"]}>
              {t("backDashboard")}
            </Link>
          </div>

          <p className={classes["addeducation__content-title"]}>
            {t("addEdu")}
          </p>


          <form onSubmit={addExperience} className={classes["addeducation__content-form"]}>

            {/* Tepa qismi */}
            <div className={classes["addeducation__content-wrapper"]}>

              {/* Left block */}
              <div className={classes["addeducation__content-left"]}>

                <div className={classes["addeducation__content-item"]}>
                  <label className={classes["addeducation__content-label"]}
                    htmlFor="school">
                    {t("school")}
                  </label>
                  <input className={classes["addeducation__content-input"]}
                    type="text"
                    name='school'
                    id='school'
                    placeholder='Stanford'
                    value={values.school}
                    onChange={handleInpChange} />
                </div>

                <div className={classes["addeducation__content-item"]}>
                  <label className={classes["addeducation__content-label"]}
                    htmlFor="from">
                    {t("date")}
                  </label>

                  <div className={classes["addeducation__content-inputs"]}>

                    <input className={classes["addeducation__content-inputDate"]}
                      type="date"
                      name='from'
                      id='from'
                      value={values.from}
                      onChange={handleInpChange} />


                    <span>To</span>

                    <label className={classes["addeducation__content-inputCheckLabel"]}
                      htmlFor="checkbox">
                      Current
                    </label>

                    <input className={classes["addeducation__content-inputCheck"]}
                      type="checkbox"
                      name='checkbox'
                      id='checkbox' />

                    <input className={classes["addeducation__content-inputDate"]}
                      type="date"
                      name='to'
                      id='to'
                      value={values.to}
                      onChange={handleInpChange} />
                  </div>
                </div>

              </div>

              {/* Right block */}
              <div className={classes["addeducation__content-right"]}>

                <div className={classes["addeducation__content-item"]}>
                  <label className={classes["addeducation__content-label"]}
                    htmlFor="degree">
                    {t("degree")}
                  </label>
                  <input className={classes["addeducation__content-input"]}
                    type="text"
                    name='degree'
                    id='degree'
                    placeholder='Master'
                    value={values.degree}
                    onChange={handleInpChange} />
                </div>

                <div className={classes["addeducation__content-item"]}>
                  <label className={classes["addeducation__content-label"]}
                    htmlFor="fieldofstudy">
                    {t("fieldStudy")}
                  </label>
                  <input className={classes["addeducation__content-input"]}
                    type="text"
                    name='fieldofstudy'
                    id='fieldofstudy'
                    placeholder='Computer Science'
                    value={values.fieldofstudy}
                    onChange={handleInpChange} />
                </div>

              </div>

            </div>

            <div className={classes["addeducation__content-description"]}>
              <label htmlFor="textarea">
                {t("description")}
                </label>
              <textarea className={classes["addeducation__content-textarea"]}
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder='Tell us a little about the education...'
                value={values.description}
                onChange={handleInpChange} >
              </textarea>
            </div>

            <div className={classes["addeducation__content-buttons"]}>
              <button type='submit' className={classes["addeducation__content-add"]}>
                {t("add")}
              </button>
            </div>



          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEducation