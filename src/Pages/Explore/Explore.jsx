import React from 'react'
import { Link } from 'react-router-dom'
import classes from './explore.module.scss'

const Explore = () => {
  return (
    <div className={classes["explore"]}>
      <div className="container">
        <div className={classes["explore__content"]}>
          <h2 className={classes["explore__content-title"]}>
            Find the best opportunities...
          </h2>

          <ul className={classes["explore__content-list"]}>

            <li className={classes["explore__content-li"]}>
              <Link to="/jobs" className={classes["explore__content-info"]}>
                <h2 className={classes["explore__content-theme"]}>Title</h2>
                <p className={classes["explore__content-text"]}>Text</p>
                <p className={classes["explore__content-text"]}>By: Author</p>
                <p className={classes["explore__content-text"]}>1.03.2023</p>
              </Link>

              <div className={classes["explore__content-buttons"]}>

                <div className={classes["explore__content-left"]}>
                  <button className={classes["explore__content-btn"]}>Like <span>0</span></button>
                  <button className={classes["explore__content-btn"]}>Dislike</button>
                  <button className={classes["explore__content-btn"]}>Views <span>0</span></button>
                </div>

                <div className={classes["explore__content-right"]}>
                  <button className={classes["explore__content-apply"]}>Apply</button>
                </div>

              </div>


            </li>

            <li className={classes["explore__content-li"]}>
              <Link to="/jobs" className={classes["explore__content-info"]}>
                <h2 className={classes["explore__content-theme"]}>Title</h2>
                <p className={classes["explore__content-text"]}>Text</p>
                <p className={classes["explore__content-text"]}>By: Author</p>
                <p className={classes["explore__content-text"]}>1.03.2023</p>
              </Link>

              <div className={classes["explore__content-buttons"]}>

                <div className={classes["explore__content-left"]}>
                  <button className={classes["explore__content-btn"]}>Like <span>0</span></button>
                  <button className={classes["explore__content-btn"]}>Dislike</button>
                  <button className={classes["explore__content-btn"]}>Views <span>0</span></button>
                </div>

                <div className={classes["explore__content-right"]}>
                  <button className={classes["explore__content-apply"]}>Apply</button>
                </div>

              </div>


            </li>

            <li className={classes["explore__content-li"]}>
              <Link to="/jobs" className={classes["explore__content-info"]}>
                <h2 className={classes["explore__content-theme"]}>Title</h2>
                <p className={classes["explore__content-text"]}>Text</p>
                <p className={classes["explore__content-text"]}>By: Author</p>
                <p className={classes["explore__content-text"]}>1.03.2023</p>
              </Link>

              <div className={classes["explore__content-buttons"]}>

                <div className={classes["explore__content-left"]}>
                  <button className={classes["explore__content-btn"]}>Like <span>0</span></button>
                  <button className={classes["explore__content-btn"]}>Dislike</button>
                  <button className={classes["explore__content-btn"]}>Views <span>0</span></button>
                </div>

                <div className={classes["explore__content-right"]}>
                  <button className={classes["explore__content-apply"]}>Apply</button>
                </div>

              </div>


            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Explore