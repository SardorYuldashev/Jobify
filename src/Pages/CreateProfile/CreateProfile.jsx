import axios from 'axios'
import React, { useState } from 'react'
import classes from './createprofile.module.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadUserCompleted, loadUserInfo } from '../../store/slices/user';
import { useDispatch } from 'react-redux';

const CreateProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    status: "",
    company: "",
    website: "",
    skills: "",
    location: "",
    github: "",
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
      return toast("Skkills bo'lini to'dirinf", { type: "error" })
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
            * = required fields
          </p>

          <form onSubmit={handleComplete} className={classes["createProfile__content-form"]}>

            <div className={classes["createProfile__content-formTop"]}>

              {/* left block */}
              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="status">
                    * Work Status
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
                    Select the best option that fits you
                  </p>
                </div>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="company">
                    Company
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
                    Website
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='website'
                    id='website'
                    placeholder='apple.com'
                    value={values.website}
                    onChange={handleInpChange} />

                  <p className={classes["createProfile__content-text"]}>
                    You do not need to specify https protocol
                  </p>
                </div>

              </div>

              {/* right block */}
              <div className={classes["createProfile__content-block"]}>

                <div>
                  <label className={classes["createProfile__content-label"]}
                    htmlFor="skills">
                    * Skills
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
                    Location
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
                    Github user name
                  </label>

                  <input className={classes["createProfile__content-input"]}
                    type="text"
                    name='github'
                    id='github'
                    placeholder='apple'
                    value={values.github}
                    onChange={handleInpChange} />

                  <p className={classes["createProfile__content-text"]}>
                    You need to specify only username (without https://github.com)
                  </p>
                </div>
              </div>

            </div>

            {/* bottom block */}
            <div className={classes["createProfile__content-formBottom"]}>
              <label className={classes["createProfile__content-label"]}
                htmlFor="bio">
                Bio
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
                You may say about your recent experience or what you are up to.
              </p>
            </div>

            <button type='submit' className={classes["createProfile__content-btn"]}>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProfile