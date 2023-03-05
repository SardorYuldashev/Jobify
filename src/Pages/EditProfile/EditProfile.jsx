import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import classes from './editprofile.module.scss'
import { loadUserInfo } from '../../store/slices/user';

const EditProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {info} = useSelector(({user}) => user)

  const [values, setValues] = useState({
    status: info.status,
    company: info.company,
    website: info.website,
    skills: info.skills,
    location: info.location,
    githubusername: info.githubusername,
    bio: info.bio,
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
      console.log(data);
      dispatch(loadUserInfo(data))
      localStorage.setItem("userInfo", JSON.stringify(data))
      toast("Ma'lumotlar o'zgartirildi", {type: "info"})
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
    <div className={classes["editprofile"]}>
      <div className="container">
        <div className={classes["editprofile__content"]}>

        <div className={classes["editprofile__content-buttonsBack"]}>
            <Link to="/dashboard" className={classes["editprofile__content-btnBack"]}>
              Back to Dashborad
            </Link>
          </div>

          <p className={classes["editprofile__content-info"]}>
            * = required fields
          </p>

          <form onSubmit={handleComplete} className={classes["editprofile__content-form"]}>

            <div className={classes["editprofile__content-formTop"]}>

              {/* left block */}
              <div className={classes["editprofile__content-block"]}>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="status">
                    * Work Status
                  </label>

                  <select className={classes["editprofile__content-input"]}
                    name="status"
                    id="status"
                    value={values.status}
                    onChange={handleInpChange}>

                    <option className={classes["editprofile__content-option"]} value="">Select your work status</option>

                    <option className={classes["editprofile__content-option"]} value="Open to work">Open to work</option>

                    <option className={classes["editprofile__content-option"]} value="Open to hire">Open to hire</option>

                    <option className={classes["editprofile__content-option"]} value="Looking for new opportunites">Looking for new opportunites</option>
                  </select>

                  <p className={classes["editprofile__content-text"]}>
                    Select the best option that fits you
                  </p>
                </div>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="company">
                    Company
                  </label>

                  <input className={classes["editprofile__content-input"]}
                    type="text"
                    name='company'
                    id='company'
                    placeholder='Apple Inc.'
                    value={values.company}
                    onChange={handleInpChange} />
                </div>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="website">
                    Website
                  </label>

                  <input className={classes["editprofile__content-input"]}
                    type="text"
                    name='website'
                    id='website'
                    placeholder='apple.com'
                    value={values.website}
                    onChange={handleInpChange} />

                  <p className={classes["editprofile__content-text"]}>
                    You do not need to specify https protocol
                  </p>
                </div>

              </div>

              {/* right block */}
              <div className={classes["editprofile__content-block"]}>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="skills">
                    * Skills
                  </label>

                  <input className={classes["editprofile__content-input"]}
                    type="text"
                    name='skills'
                    id='skills'
                    placeholder='HTML, CSS, JS'
                    value={values.skills}
                    onChange={handleInpChange} />

                  <p className={classes["editprofile__content-text"]}>
                    Separate each skill with comma(,)
                  </p>
                </div>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="location">
                    Location
                  </label>

                  <input className={classes["editprofile__content-input"]}
                    type="text"
                    name='location'
                    id='location'
                    placeholder='One Apple Park Way;  Cupertino , CA 95014 , U.S.A'
                    value={values.location}
                    onChange={handleInpChange} />
                </div>

                <div>
                  <label className={classes["editprofile__content-label"]}
                    htmlFor="github">
                    Github user name
                  </label>

                  <input className={classes["editprofile__content-input"]}
                    type="text"
                    name='githubusername'
                    id='githubusername'
                    placeholder='apple'
                    value={values.githubusername}
                    onChange={handleInpChange} />

                  <p className={classes["editprofile__content-text"]}>
                    You need to specify only username (without https://github.com/)
                  </p>
                </div>
              </div>

            </div>

            {/* bottom block */}
            <div className={classes["editprofile__content-formBottom"]}>
              <label className={classes["editprofile__content-label"]}
                htmlFor="bio">
                Bio
              </label>

              <textarea className={classes["editprofile__content-input"]}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                value={values.bio}
                onChange={handleInpChange} >
              </textarea>

              <p className={classes["editprofile__content-text"]}>
                You may say about your recent experience or what you are up to.
              </p>
            </div>

            <button type='submit' className={classes["editprofile__content-btn"]}>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile