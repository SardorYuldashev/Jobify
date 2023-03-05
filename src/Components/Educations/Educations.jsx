import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loadUserInfo } from '../../store/slices/user'
import classes from './educations.module.scss'


const Educations = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState([])
  const [render, setRender] = useState(true)

  useEffect(() => {
    async function getUserInfo() {
      try {
        let { data } = await axios.get("/profile/me")
        if (data) {
          setUserInfo(data.education)
        }
        

      } catch (error) {
        toast(`Education component ${error}`, { type: "error" })
      }
    }
    getUserInfo()
  }, [render])


  async function deleteExperince (id) {    
    try {
      let {data} = await axios.delete(`/profile/education/${id}`)
      if (data) {
        dispatch(loadUserInfo(data))
        localStorage.setItem("userInfo", JSON.stringify(data))
        toast("O'quv yurti o'chirildi", {type: "error"})
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
    <div className={classes["educations"]}>
      <ul className={classes["educations__list"]}>

        {userInfo?.map((item) => <li key={item._id} className={classes["educations__list-li"]}>
          <div className={classes["educations__list-info"]}>

            <h2 className={classes["educations__list-title"]}>
              <span className={classes["educations__list-status"]}>{item.school}</span>
              <span> at </span>
              <span className={classes["educations__list-company"]}>{item.degree}</span>
            </h2>

            <p className={classes["educations__list-text"]}>
              <span>From:</span> {item.from.slice(0, 10)}
            </p>

            <p className={classes["educations__list-text"]}>
              <span>Until:</span> { (!item.to) ?  "Now" : item.to.slice(0,10)}
            </p>

            <p className={classes["educations__list-text"]}>
              <span>Location:</span> {item.fieldofstudy}
            </p>

            <p className={classes["educations__list-text"]}>
              <span>Description:</span> {item.description}
            </p>
          </div>

          <button onClick={() => {deleteExperince(item._id)}} className={classes["educations__list-btn"]}>            
            Delete
          </button>
        </li>)}       

      </ul>      
    </div>
  )
}

export default Educations