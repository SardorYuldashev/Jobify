import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './home.module.scss'

const Home = () => {
  let { token } = useSelector(({ user }) => user)
  let { isCompleted } = useSelector(({ user }) => user)









  return (
    <div className={classes["home"]}>
      <div className={classes["home__blur"]}>
        <div className="container">
          <div className={classes["home__content"]}>
            <h1 className={classes["home__content-title"]}>
              Find the <span>best</span> opportunities with <span>us</span>
            </h1>
            <p className={classes["home__content-text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur fugiat architecto nostrum deleniti qui in modi sit eaque illo unde magnam sed similique rem placeat, totam itaque alias sunt.</p>


            {!token && !isCompleted ?
              <div className={classes["home__content-buttons"]}>
                <Link to="/register" className={classes["home__content-btn"]}>Register</Link>
                <Link to="/login" className={classes["home__content-btn"]}>Login</Link>
              </div> :
              <h2> </h2>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home