import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadUserCompleted, loadUserInfo } from '../../store/slices/user';
import classes from './createprofile.module.scss'
import { useTranslation } from 'react-i18next';


// status, skills, website?, bio?, location?, company?, githubusername?

const CreateProfile = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    status: "",
    company: "",
    website: "",
    skills: "",
    location: "",
    githubusername: "",
    bio: "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function handleComplete(e) {
    e.preventDefault()

    if (values.status === "") {
      return toast("Statusni tanlang", { type: "error" })
    }

    if (!values.skills) {
      return toast("Skkills bo'limini to'diring", { type: "error" })
    }

    try {
      let { data } = await axios.post("/profile", values)
      dispatch(loadUserInfo(data))
      dispatch(loadUserCompleted(true))
      localStorage.setItem("isCompleted", true)
      localStorage.setItem("userInfo", JSON.stringify(data))
      toast("Profil muvaffaqiyatli to'ldirildi", {type: "info"})
      navigate("/dashboard")      
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
    <div className={classes["createProfile"]}>
      <div className="container">
        <div className={classes["createProfile__content"]}>
          <p className={classes["createProfile__content-info"]}>
            {t("requiredField")}
          </p>

          <form onSubmit={handleComplete} className={classes["createProfile__content-form"]}>

            <div className={classes["createProfile__content-formTop"]}>

              {/* left block */}
              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="status">
                    {t("workStatus")}
                  </label>

                  <select className={classes["createProfile__content-input"]}
                    name="status"
                    id="status"
                    value={values.status}
                    onChange={handleInpChange}>

                    <option className={classes["createProfile__content-option"]} value="">Select your work status</option>

                    <option className={classes["createProfile__content-option"]} value="Open to work">Open to work</option>

                    <option className={classes["createProfile__content-option"]} value="Open to hire">Open to hire</option>

                    <option className={classes["createProfile__content-option"]} value="Looking for new opportunites">Looking for new opportunites</option>
                  </select>

                  <p className={classes["createProfile__content-text"]}>
                    {t("selectOption")}
                  </p>
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="company">
                    {t("company")}
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='company'
                    id='company'
                    placeholder='Apple Inc.'
                    value={values.company}
                    onChange={handleInpChange} />
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="website">
                    {t("website")}
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='website'
                    id='website'
                    placeholder='apple.com'
                    value={values.website}
                    onChange={handleInpChange} />

                  <p className={classes["createProfile__content-text"]}>
                    {t("specifyProtocol")}
                  </p>
                </div>

              </div>

              {/* right block */}
              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="skills">
                    {t("skills")}
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='skills'
                    id='skills'
                    placeholder='HTML, CSS, JS'
                    value={values.skills}
                    onChange={handleInpChange} />

                  <p className={classes["createProfile__content-text"]}>
                    Separate each skill with comma(,)
                  </p>
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="location">
                    {t("location")}
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='location'
                    id='location'
                    placeholder='One Apple Park Way;  Cupertino , CA 95014 , U.S.A'
                    value={values.location}
                    onChange={handleInpChange} />
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="github">
                    {t("gitUser")}
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='githubusername'
                    id='githubusername'
                    placeholder='apple'
                    value={values.githubusername}
                    onChange={handleInpChange} />

                  <p className={classes["createProfile__content-text"]}>
                    {t("onlyUserName")}
                  </p>
                </div>
              </div>

            </div>

            {/* bottom block */}
            <div className={classes["createProfile__content-formBottom"]}>
              <label className={classes["createProfile__content-label"]}
                htmlFor="bio">
                {t("bio")}
              </label>

              <textarea className={classes["createProfile__content-input"]}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                value={values.bio}
                onChange={handleInpChange} >
              </textarea>

              <p className={classes["createProfile__content-text"]}>
                {t("sayAbout")}
              </p>
            </div>

            <button type='submit' className={classes["createProfile__content-btn"]}>{t("create")}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProfile