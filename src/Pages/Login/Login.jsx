import React, { useState } from 'react'
import classes from './login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { localTokenKey } from '../../Components/Constants'
import { useDispatch } from 'react-redux'
import { loadUserEmail, loadUserToken } from '../../store/slices/user'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  function handleInpChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function handleRegister(e) {
    e.preventDefault()

    if (!values.email || !values.password) {
      return toast("Bo'sh inputlarni to'ldiring", { type: "error" })
    }

    if (values.password.length < 6) {
      return toast("Parol kamida 6 ta harf bo'lishi kerak", { type: "error" })
    }


    try {
      let { data } = await axios.post("/auth", values)
      let { token } = data

      if (token) {
        localStorage.setItem(localTokenKey, token)
        axios.defaults.headers.common["access-token"] = token
        dispatch(loadUserToken(token))  
      }
      toast("Siz profilingizga kirdingiz", { type: "info" })
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
    <div className={classes["login"]}>
      <div className="container">
        <div className={classes["login__content"]}>
          <div className={classes["login__content-wrapper"]}>
            <h2 className={classes["login__content-title"]}>
              Login
            </h2>

            <form onSubmit={handleRegister} className={classes["login__content-form"]}>
              <div className={classes["login__content-formBox"]}>
                <label className={classes["login__content-label"]}
                  htmlFor="email">
                  Your email
                </label>
                <input className={classes["login__content-input"]}
                  type="email"
                  name='email'
                  id='email'
                  value={values.email}
                  onChange={handleInpChange}
                />
              </div>

              <div className={classes["login__content-formBox"]}>
                <label className={classes["login__content-label"]}
                  htmlFor="password">
                  Your password
                </label>
                <input className={classes["login__content-input"]}
                  type="password"
                  name='password'
                  id='password'
                  value={values.passworde}
                  onChange={handleInpChange}
                />
              </div>

              <button className={classes["login__content-btn"]}>Login</button>
            </form>

            <span className={classes["login__content-text"]}>No account yet?</span>
            <Link to="/register" className={classes["login__content-link"]}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login