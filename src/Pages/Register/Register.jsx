import React, { useState } from 'react'
import classes from './register.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { localTokenKey } from '../../Components/Constants';
import { loadUserCompleted, loadUserInfo, loadUserToken } from '../../store/slices/user';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {t} = useTranslation()

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function handleRegister(e) {
    e.preventDefault()
    if (!values.name || !values.email || !values.password || !values.confirmPassword) {
      return toast("Bo'sh inputlarni to'ldiring", { type: "error" })
    }

    if (values.name.length < 4) {
      return toast("Ism kamida 4 ta harf bo'lishi kerak", { type: "error" })
    }

    if (values.password.length < 6) {
      return toast("Parol kamida 6 ta harf bo'lishi kerak", { type: "error" })
    }

    if (values.password !== values.confirmPassword) {
      return toast("Parollar har xil", { type: "error" })
    }

       try {
      let { data } = await axios.post("/users", values)
      let { token } = data

      if (token) {
        localStorage.setItem(localTokenKey, token)
        localStorage.setItem("isCompleted", false)
        localStorage.setItem("userInfo", JSON.stringify([]))
        axios.defaults.headers.common["access-token"] = token
        dispatch(loadUserToken(token))
        dispatch(loadUserCompleted(false))
        dispatch(loadUserInfo([]))
      }
      
      toast("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!!!", { type: "info" })
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
    <div className={classes["register"]}>
      <div className="container">
        <div className={classes["register__content"]}>
          <div className={classes["register__content-wrapper"]}>

            <h2 className={classes["register__content-title"]}>
              {t("register")}
            </h2>

            <form onSubmit={handleRegister} className={classes["register__content-form"]}>

              <div className={classes["register__content-formBox"]}>
                <label className={classes["register__content-label"]}
                  htmlFor="name">
                  {t("yourName")}
                </label>
                <input className={classes["register__content-input"]}
                  type="text"
                  name='name'
                  id='name'
                  value={values.name}
                  onChange={handleInpChange}
                />
              </div>


              <div className={classes["register__content-formBox"]}>
                <label className={classes["register__content-label"]}
                  htmlFor="email">
                  {t("yourEmail")}
                </label>
                <input className={classes["register__content-input"]}
                  type="email"
                  name='email'
                  id='email'
                  value={values.email}
                  onChange={handleInpChange}
                />
              </div>


              <div className={classes["register__content-formBox"]}>
                <label className={classes["register__content-label"]}
                  htmlFor="password">
                  {t("yourPassword")}
                </label>
                <input className={classes["register__content-input"]}
                  type="password"
                  name='password'
                  id='password'
                  value={values.password}
                  onChange={handleInpChange}
                />
              </div>


              <div className={classes["register__content-formBox"]}>
                <label className={classes["register__content-label"]}
                  htmlFor="confirmPassword">
                  {t("confirmPassword")}
                </label>
                <input className={classes["register__content-input"]}
                  type="password"
                  name='confirmPassword'
                  id='confirmPassword'
                  value={values.confirmPassword}
                  onChange={handleInpChange}
                />
              </div>

              <button className={classes["register__content-btn"]}>
                {t("register")}
              </button>

            </form>

            <span className={classes["register__content-text"]}>
              {t("alreadyAccount")}
            </span>

            <Link to="/login" className={classes["register__content-link"]}>
              {t("login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register