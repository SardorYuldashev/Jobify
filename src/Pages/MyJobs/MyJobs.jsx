import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import classes from './myjobs.module.scss'

const MyJobs = () => {
  const {t} = useTranslation()
  // Profil to'liq bo'masa dashboarda otish
  let navigate = useNavigate()
  let { isCompleted } = useSelector(({ user }) => user)
  useEffect(() => {
    if (isCompleted === false) navigate("/dashboard")
  }, [isCompleted])

  // Create new job
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    title: "",
    description: ""
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function createNewJob(e) {
    e.preventDefault()
    try {
      let { data } = await axios.post("/jobs", values)
      if (data) toast("E'lon qo'shildi", { type: "info" })
      setValues({ title: "", description: "" })
      setRefresh(!refresh)
    } catch (error) {
      toast(error, { type: "error" })
    }
  }

  // Print my jobs
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async function getJobs() {
      try {
        setLoading(true)
        let { data } = await axios.get("/jobs/me")
        setJobs(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [refresh])

  //Delete job
  async function deleteJob(id) {
    try {
      let { data } = await axios.delete(`/jobs/${id}`)
      console.log(data);
      setRefresh(!refresh)
      toast("E'lon o'chirildi", { type: "info" })
    } catch (error) {
      toast(error, { type: "error" })
    }
  }

  return (
    <div className={classes["myjobs"]}>
      <div className="container">
        <div className={classes["myjobs__content"]}>
          <p className={classes["myjobs__content-title"]}>
            {t("opportunites")}
          </p>
          <p className={classes["myjobs__content-text"]}>
            {t("necessary")}
          </p>

          <form onSubmit={createNewJob} className={classes["myjobs__content-form"]}>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]}
                htmlFor="title" >
                {t("jobTitle")}
              </label>
              <input className={classes["myjobs__content-input"]}
                type="text"
                name='title'
                id='title'
                placeholder={t("senior")}
                value={values.title}
                onChange={handleInpChange} />
            </div>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]}
                htmlFor="description">
                {t("jobDescripton")}
              </label>
              <textarea className={classes["myjobs__content-input"]}
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder={t("requirements")}
                value={values.description}
                onChange={handleInpChange}>
              </textarea>
            </div>

            <button type='submit' className={classes["myjobs__content-btn"]}>{t("submit")}</button>
          </form>

          <p className={classes["myjobs__content-title"]}>
            {t("youPosted")}
          </p>

          <ul className={classes["myjobs__content-list"]}>
            {loading ? <h2>{t("loading")}</h2> : (
              jobs?.map((item) => <li key={item._id} className={classes["myjobs__content-li"]}>
                <Link to={`/jobs/${item._id}`} className={classes["myjobs__content-info"]}>
                  <h2 className={classes["myjobs__content-theme"]}>{item.title}</h2>
                  <p className={classes["myjobs__content-text"]}>{item.description}</p>
                </Link>

                <div className={classes["myjobs__content-buttons"]}>

                  <div className={classes["myjobs__content-left"]}>
                    <button className={classes["myjobs__content-btn"]}>{t("likes")} <span>{item.likes.length}</span></button>
                    <button className={classes["myjobs__content-btn"]}>{t("applicants")} <span>{item.applicants.length}</span></button>
                  </div>

                  <div className={classes["myjobs__content-right"]}>
                    <button onClick={() => { deleteJob(item._id) }} className={classes["myjobs__content-delete"]}>{t("delete")}</button>
                  </div>
                </div>
              </li>)
            )}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyJobs