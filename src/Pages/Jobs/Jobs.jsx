import React, { useEffect, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import classes from './jobs.module.scss'
import avatar from '../../assets/avatar.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Jobs = () => {
  const { id } = useParams()

  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const [job, setJob] = useState([])
  const [applicants, setApplicants] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/jobs/${id}`)

        if (data) {
          setJob([data])
          setApplicants(data.applicants)
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [refresh])

  // Like button change
  async function hanleLike(id) {
    try {
      let { data } = await axios.put(`/jobs/like/${id}`)
      toast("Laykingiz qo'shildi", { type: "info" })
      setRefresh(!refresh)
    } catch (error) {
      toast("Siz avval layk bosgansiz", { type: "error" })
    }
  }

  //Apply button change
  async function hanleApply(id) {
    try {
      let { data } = await axios.put(`/jobs/unlike/${id}`)
      toast("Laykingiz o'chirildi", { type: "info" })
      setRefresh(!refresh)
    } catch (error) {
      toast("Siz avval layk bosmagansiz", { type: "error" })
    }
  }

  //Dislike button change
  async function hanleDislike(id) {
    try {
      let { data } = await axios.put(`/jobs/apply/${id}`)
      toast(" Ro'yhatingizga qo'shildi", { type: "info" })
      setRefresh(!refresh)
    } catch (error) {
      toast("Ro'yhatda mavjud", { type: "error" })
    }
  }

  return (
    <div className={classes["jobs"]}>
      <div className="container">
        <div className={classes["jobs__content"]}>

          <div className={classes["jobs__content-buttonsX"]}>
            <button onClick={goBack} className={classes["jobs__content-btnX"]}>
              Go Back
            </button>
          </div>

          {job.length === 0 ? <h2>Loading...</h2> : job?.map((item) =>
            <div key={item._id} className={classes["jobs__content-item"]}>
              <div className={classes["jobs__content-info"]}>
                <h2 className={classes["jobs__content-theme"]}>{item.title}</h2>
                <p className={classes["jobs__content-text"]}>{item.description}</p>
                <p className={classes["jobs__content-text"]}>By: {item.name}</p>
                <p className={classes["jobs__content-text"]}>{item.date.slice(0, 10)}</p>
              </div>

              <div className={classes["jobs__content-buttons"]}>

                <div className={classes["jobs__content-left"]}>
                  <button onClick={() => { hanleLike(item._id) }} className={classes["jobs__content-btn"]}>Like <span>{item.likes.length}</span></button>
                  <button onClick={() => { hanleDislike(item._id) }} className={classes["jobs__content-btn"]}>Dislike</button>
                  <button className={classes["jobs__content-btn"]}>Views <span>{item.applicants.length}</span></button>
                </div>

                <div className={classes["jobs__content-right"]}>
                  <button onClick={() => { hanleApply(item._id) }} className={classes["jobs__content-apply"]}>Apply</button>
                </div>
              </div>
            </div>)
          }



          {applicants.length === 0 ? <h2> </h2> : <div className={classes["jobs__content-applicants"]}>
            <p className={classes["jobs__content-title"]}>
              Applicants
            </p>

            <ul className={classes["jobs__content-users"]}>


              {applicants.map((item) =>
                <li key={item._id} className={classes["jobs__content-user"]}>
                  <div className={classes["jobs__content-imgBox"]}>
                    <img className={classes["jobs__content-img"]} src={item.avatar} alt={item.name} />
                  </div>

                  <div className={classes["jobs__content-userInfo"]}>
                    <h2 className={classes["jobs__content-useName"]}>
                      {item.name}
                    </h2>
                    <a className={classes["jobs__content-useEmail"]} href="#!">
                      {item.email}
                    </a>
                  </div>

                  <div className={classes["jobs__content-userButtons"]}>
                    <Link to={`/profile/${item._id}`} className={classes["jobs__content-userBtn"]}>
                      View Profile
                    </Link>
                  </div>
                </li>)}











               
              {/* <li className={classes["jobs__content-user"]}>
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


              </li>  */}

            </ul>

          </div>}


        </div>
      </div>
    </div>
  )
}

export default Jobs