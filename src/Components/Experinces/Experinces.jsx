import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loadUserInfo } from '../../store/slices/user'
import classes from './experiences.module.scss'

const Experinces = () => {
  const { t } = useTranslation()
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
        toast(`Experiences component ${error}`, { type: "error" })
      }
    }
    getUserInfo()
  }, [render])

  async function deleteExperince(id) {
    try {
      let { data } = await axios.delete(`/profile/experience/${id}`)
      if (data) {
        dispatch(loadUserInfo(data))
        localStorage.setItem("userInfo", JSON.stringify(data))
        toast("Ish joyi o'chirildi", { type: "error" })
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
              <span> {t("at")} </span>
              <span className={classes["experiences__list-company"]}>{item.company}</span>
            </h2>

            <p className={classes["experiences__list-text"]}>
              <span>{t("from")}:</span> {item.from.slice(0, 10)}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>{t("until")}:</span> {(!item.to) ? "Now" : item.to.slice(0, 10)}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>{t("location")}:</span> {item.location}
            </p>

            <p className={classes["experiences__list-text"]}>
              <span>{t("description")}:</span> {item.description}
            </p>
          </div>

          <button onClick={() => { deleteExperince(item._id) }} className={classes["experiences__list-btn"]}>
            {t("delete")}
          </button>
        </li>)}

      </ul>
    </div>
  )
}

export default Experinces