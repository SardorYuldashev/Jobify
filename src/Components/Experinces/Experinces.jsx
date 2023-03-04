import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loadUserInfo } from '../../store/slices/user'
import classes from './experiences.module.scss'

const Experinces = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState([])
  const [render, setRender] = useState(true)

  useEffect(() => {
    async function getUserInfo() {
      try {
        let { data } = await axios.get("/profile/me")
        if (data) {
          setUserInfo(data.experience)
        }
        

      } catch (error) {
        toast("Experinces component 19", { type: "error" })
      }
    }
    getUserInfo()
  }, [render])

  async function deleteExperince (id) {    
    try {
      let {data} = await axios.delete(`/profile/experience/${id}`)
      if (data) {
        dispatch(loadUserInfo(data))
        localStorage.setItem("userInfo", JSON.stringify(data))
        toast("Ish joyi o'chirildi", {type: "error"})
        setRender(!render)
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
    <div className={classes["experiences"]}>
      <ul className={classes["experiences__list"]}>

        {userInfo?.map((item) => <li key={item._id} className={classes["experiences__list-li"]}>
          <div className={classes["experiences__list-info"]}>

            <h2 className={classes["experiences__list-title"]}>
              <span className={classes["experiences__list-status"]}>{item.title}</span>
              <span> at </span>
              <span className={classes["experiences__list-company"]}>{item.company}</span>
            </h2>

            <p className={classes["experiences__list-text"]}>
              <span>From:</span> {item.from.slice(0, 10)}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>Until:</span> { (!item.to) ?  "Until today" : item.to.slice(0,10)}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>Location:</span> {item.location}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>Description:</span> {item.description}
            </p>
          </div>

          <button onClick={() => {deleteExperince(item._id)}} className={classes["experiences__list-btn"]}>            
            Delete
          </button>
        </li>)}

        {/* <li className={classes["experiences__list-li"]}>
          <div className={classes["experiences__list-info"]}>

            <h2 className={classes["experiences__list-title"]}>
              <span className={classes["experiences__list-status"]}>Junior</span>
              <span> at </span>
              <span className={classes["experiences__list-company"]}>Microsoft</span>
            </h2>

            <p className={classes["experiences__list-text"]}>
              From: 01/01/2001
            </p>

            <p className={classes["experiences__list-text"]}>
              Until: 02/02/2002
            </p>

            <p className={classes["experiences__list-text"]}>
              Location: USA
            </p>

            <p className={classes["experiences__list-text"]}>
              Description: Yes
            </p>
          </div>

          <div className={classes["experiences__list-btn"]}>
            Delete
          </div>
        </li> */}

      </ul>      
    </div>
  )
}

export default Experinces