import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import classes from './jobs.module.scss'
import avatar from '../../assets/avatar.png'
import { useParams } from 'react-router-dom'

const Jobs = () => {
  const { id } = useParams()

  console.log(id);

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={classes["jobs"]}>
      <div className="container">
        <div className={classes["jobs__content"]}>

          <div className={classes["jobs__content-buttonsX"]}>
            <button onClick={goBack} className={classes["jobs__content-btnX"]}>
              Go Back
            </button>
          </div>

          <div className={classes["jobs__content-item"]}>
            <div className={classes["jobs__content-info"]}>
              <h2 className={classes["jobs__content-theme"]}>Title</h2>
              <p className={classes["jobs__content-text"]}>Text</p>
              <p className={classes["jobs__content-text"]}>By: Author</p>
              <p className={classes["jobs__content-text"]}>1.03.2023</p>
            </div>

            <div className={classes["jobs__content-buttons"]}>

              <div className={classes["jobs__content-left"]}>
                <button className={classes["jobs__content-btn"]}>Like <span>0</span></button>
                <button className={classes["jobs__content-btn"]}>Dislike</button>
                <button className={classes["jobs__content-btn"]}>Views <span>0</span></button>
              </div>

              <div className={classes["jobs__content-right"]}>
                <button className={classes["jobs__content-apply"]}>Apply</button>
                <button className={classes["jobs__content-apply"]}>Delete</button>
              </div>

            </div>


          </div>

          <div className={classes["jobs__content-applicants"]}>
            <p className={classes["jobs__content-title"]}>
              Applicants
            </p>

            <ul className={classes["jobs__content-users"]}>

              <li className={classes["jobs__content-user"]}>
                <div className={classes["jobs__content-imgBox"]}>
                  <img className={classes["jobs__content-img"]} src={avatar} alt="" />
                </div>

                <div className={classes["jobs__content-userInfo"]}>
                  <h2 className={classes["jobs__content-useName"]}>
                    Person Abduvali Rajab Boboy
                  </h2>
                  <a className={classes["jobs__content-useEmail"]} href="#!">
                    henkook-baron@mail.ru
                  </a>
                </div>

                <div className={classes["jobs__content-userButtons"]}>
                  <Link to="/profile" className={classes["jobs__content-userBtn"]}>
                    View Profile
                  </Link>
                </div>


              </li>

              <li className={classes["jobs__content-user"]}>
                <div className={classes["jobs__content-imgBox"]}>
                  <img className={classes["jobs__content-img"]} src={avatar} alt="" />
                </div>

                <div className={classes["jobs__content-userInfo"]}>
                  <h2 className={classes["jobs__content-useName"]}>
                    Person Abduvali Rajab Boboy
                  </h2>
                  <a className={classes["jobs__content-useEmail"]} href="#!">
                    henkook-baron@mail.ru
                  </a>
                </div>

                <div className={classes["jobs__content-userButtons"]}>
                  <Link to="/profile" className={classes["jobs__content-userBtn"]}>
                    View Profile
                  </Link>
                </div>


              </li>

              <li className={classes["jobs__content-user"]}>
                <div className={classes["jobs__content-imgBox"]}>
                  <img className={classes["jobs__content-img"]} src={avatar} alt="" />
                </div>

                <div className={classes["jobs__content-userInfo"]}>
                  <h2 className={classes["jobs__content-useName"]}>
                    Person Abduvali Rajab Boboy
                  </h2>
                  <a className={classes["jobs__content-useEmail"]} href="#!">
                    henkook-baron@mail.ru
                  </a>
                </div>

                <div className={classes["jobs__content-userButtons"]}>
                  <Link to="/profile" className={classes["jobs__content-userBtn"]}>
                    View Profile
                  </Link>
                </div>


              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Jobs