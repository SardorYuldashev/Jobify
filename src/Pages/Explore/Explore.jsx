import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import classes from './explore.module.scss'
import preloader from '../../assets/preloader.gif'

const Explore = () => {
  // Profil to'liq ochmagan bo'sa dashboardga o'tkazish
  // let navigate = useNavigate()
  // let { isCompleted } = useSelector(({ user }) => user)
  // let { token } = useSelector(({ user }) => user)
  // useEffect(() => {
  //   if (isCompleted === false && !token) navigate("/")
  //   if (isCompleted === false && token) navigate("/dashboard")
  // }, [isCompleted])


  // Job list olib kelish ===================================================
  const [jobs, setJobs] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    let unmounted = false
    async function getJobs() {
      try {
        let { data } = await axios.get("/jobs")
        if (unmounted) return
        setJobs(data)
      } catch (error) {
        toast(error, { type: "error" })
      }
    }
    getJobs()

    return () => {
      unmounted = false
    }
  }, [refresh])



  // Like button click
  async function handleLike(id) {
    try {
      let { data } = await axios.put(`/jobs/like/${id}`)
      setRefresh(!refresh)
      toast("Laykingiz qo'shildi", {type: "info"})
    } catch (error) {
      toast("Siz avval layk bosgansiz", {type: "error"})
    }
  }

  // Dislike button click
  async function handleDislike(id) {
    try {
      let { data } = await axios.put(`/jobs/unlike/${id}`)
      setRefresh(!refresh)
      toast("Laykingiz olib tashlandi", {type: "info"})
    } catch (error) {
      toast("Siz avval layk bosmagansiz", {type: "error"})
    }
  }

  // Apply button click
  async function handleApply(id) {
    try {
      let { data } = await axios.post(`/jobs/apply/${id}`)
      toast("E'lon ro'yxatingizga qo'shildi", {type: "info"})
    } catch (error) {
      toast("Bu e'lon ro'yxatingizga mavjud", {type: "error"})
    }
  }

  return (
    <div className={classes["explore"]}>
      <div className="container">
        <div className={classes["explore__content"]}>

          <h2 className={classes["explore__content-title"]}>
            Find the best opportunities...
          </h2>

          <ul className={classes["explore__content-list"]}>

            {jobs?.map((item) =>
              <li key={item._id} className={classes["explore__content-li"]}>
                <Link to={`/jobs/${item._id}`} className={classes["explore__content-info"]}>
                  <h2 className={classes["explore__content-theme"]}>{item.title}</h2>
                  <p className={classes["explore__content-text"]}>{item.description}</p>
                  <p className={classes["explore__content-text"]}>By: {item.name}</p>
                  <p className={classes["explore__content-text"]}>{item.date.slice(0, 10)}</p>
                </Link>

                <div className={classes["explore__content-buttons"]}>

                  <div className={classes["explore__content-left"]}>
                    <button onClick={() => { handleLike(item._id) }} className={classes["explore__content-btn"]}>Like <span>{item.likes.length}</span></button>
                    <button onClick={() => {handleDislike(item._id)}} className={classes["explore__content-btn"]}>Dislike</button>
                    <button className={classes["explore__content-btn"]}>Applicants <span>{item.applicants.length}</span></button>
                  </div>

                  <div className={classes["explore__content-right"]}>
                    <button onClick={() => {handleApply(item._id)}} className={classes["explore__content-apply"]}>Apply</button>
                  </div>

                </div>
              </li>
            )}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Explore