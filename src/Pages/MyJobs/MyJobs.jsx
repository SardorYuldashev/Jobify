import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import classes from './myjobs.module.scss'

const MyJobs = () => {
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
            Do you want to create a job opportunities?
          </p>
          <p className={classes["myjobs__content-text"]}>
            Enter necessary details and submit
          </p>

          <form onSubmit={createNewJob} className={classes["myjobs__content-form"]}>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]}
                htmlFor="title" >
                Job title
              </label>
              <input className={classes["myjobs__content-input"]}
                type="text"
                name='title'
                id='title'
                placeholder='Senior React developer'
                value={values.title}
                onChange={handleInpChange} />
            </div>

            <div className={classes["myjobs__content-formbox"]}>
              <label className={classes["myjobs__content-label"]}
                htmlFor="description">
                Job description
              </label>
              <textarea className={classes["myjobs__content-input"]}
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder='Tell a little bit about job requirements and benefits...'
                value={values.description}
                onChange={handleInpChange}>
              </textarea>
            </div>

            <button type='submit' className={classes["myjobs__content-btn"]}>Submit</button>
          </form>

          <p className={classes["myjobs__content-title"]}>
            Jobs you posted
          </p>


          <ul className={classes["myjobs__content-list"]}>
            {loading ? <h2>Loading, please wait...</h2> : (
              jobs?.map((item) => <li key={item._id} className={classes["myjobs__content-li"]}>

                <Link to={`/jobs/${item._id}`} className={classes["myjobs__content-info"]}>
                  <h2 className={classes["myjobs__content-theme"]}>{item.title}</h2>
                  <p className={classes["myjobs__content-text"]}>{item.description}</p>
                </Link>

                <div className={classes["myjobs__content-buttons"]}>

                  <div className={classes["myjobs__content-left"]}>
                    <button className={classes["myjobs__content-btn"]}>Like <span>{item.likes.length}</span></button>
                    <button className={classes["myjobs__content-btn"]}>Applicants <span>{item.applicants.length}</span></button>
                  </div>

                  <div className={classes["myjobs__content-right"]}>
                    <button onClick={() => { deleteJob(item._id) }} className={classes["myjobs__content-delete"]}>Delete</button>
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