import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './afterprofile.module.scss'
import avatar from '../../assets/avatar.png'
import Experinces from '../Experinces/Experinces'
import Educations from './../Educations/Educations';
import Git from '../Git'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { loadUserCompleted, loadUserEmail, loadUserInfo, loadUserName, loadUserToken } from '../../store/slices/user'

const AfterProfile = () => {
  let { email } = useSelector(({ user }) => user)
  let { info } = useSelector(({ user }) => user)
  let dispatch = useDispatch()
  let navigate = useNavigate()



  const [userInfo, setUserInfo] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let unmounted = false
    async function getUser() {
      setLoading(true)
      let { data } = await axios.get("/profile/me")
      if (unmounted) return
      setLoading(false)
      setUserInfo(data)
    }
    getUser()

    return () => {
      unmounted = true
    }
  }, [])


  // Profilni o'chirish
  function handleDeleteBtn() {
    let answerFirst = confirm("Rosdan ham profilni o'chirmoqchimisiz?")
    if (!answerFirst) return
    let answerSecond = confirm("Profilni qaytib tiklab bo'lmaydi!")
    if (!answerSecond) return
    let answerThird = confirm("Qaroringiz qat'iymi? Profilni o'chirasizmi?")
    if (!answerThird) return

    async function deleteProfile() {
      try {
        let data = await axios.delete("/profile")
        if (data) {
          console.log(data);
          dispatch(loadUserToken(null))
          dispatch(loadUserInfo(null))
          dispatch(loadUserCompleted(false))
          dispatch(loadUserEmail(null))
          dispatch(loadUserName(null))
          localStorage.clear()
          toast("Profil o'chirildi", { type: "info" })
          navigate("/")
        }
      } catch (error) {
        toast(error, { type: "error" })
      }
    }
    deleteProfile()
  }




  let experiences = info.experience.length === 0
  let educations = info.education.length === 0

  return loading && userInfo.length === 0 ? <h2>Loading</h2> : (
    <div className={classes["afterProfile"]}>
      <div className="container">
        <div className={classes["afterProfile__content"]}>

          {/* Приветствие */}
          <div className={classes["afterProfile__greeting"]}>
            <p className={classes["afterProfile__content-title"]}>
              Hello, {userInfo?.user?.name}
            </p>
            <p className={classes["afterProfile__greeting-text"]}>
              What are you planning to do today?
            </p>
            <div className={classes["afterProfile__greeting-buttons"]}>
              <Link className={classes["afterProfile__greeting-btn"]} to="/myjobs">Post a job</Link>
              <Link className={classes["afterProfile__greeting-btn"]} to="/explore">Explore jobs</Link>
            </div>
          </div>

          {/* User haqida ma'lumotlar */}
          <div className={classes["afterProfile__info"]}>
            <p className={classes["afterProfile__content-title"]}>
              Your Info
            </p>

            <div className={classes["afterProfile__info-item"]}>

              <div className={classes["afterProfile__info-top"]}>

                <div className={classes["afterProfile__info-imgBox"]}>
                  <img className={classes["afterProfile__info-img"]} src={avatar} alt="avatar" />
                </div>

                <ul className={classes["afterProfile__info-list"]}>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Email:</span> <a href="email">{email}</a>
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Status:</span> {userInfo?.status}
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Location:</span> {userInfo?.location}
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Bio:</span> {userInfo?.bio}
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Joined at:</span> {userInfo.date ? userInfo?.date.slice(0, 10) : userInfo.date}
                    </p>
                  </li>
                </ul>

                <ul className={classes["afterProfile__info-list"]}>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Company:</span> {userInfo?.company}
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      <span>Website:</span> <a target={'_blank'} href={userInfo?.website}>{userInfo?.website}</a>
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <div className={classes["afterProfile__info-text"]}>
                      <span>Skills:</span> {userInfo.skills ? userInfo.skills.map((item) => (
                        <div key={crypto.randomUUID()} className={classes["afterProfile__info-textBox"]}><i className="fa-solid fa-check"></i>{item} </div>
                      )) : userInfo?.skills}
                    </div>
                  </li>
                </ul>

                <ul className={classes["afterProfile__info-list"]}>

                  <li className={classes["afterProfile__info-li"]}>
                    {info?.social?.youtube === "" ? <h2> </h2> :
                      <a href={info?.social?.youtube} target={'_blank'} className={classes["afterProfile__info-links"]}>
                        <i className="fa-brands fa-youtube afterProfile__info-icon"></i> Youtube
                      </a>
                    }
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    {info?.social?.twitter === "" ? <h2> </h2> :
                      <a href={info?.social?.twitter} target={'_blank'} className={classes["afterProfile__info-links"]}>
                        <i className="fa-brands fa-twitter afterProfile__info-icon"></i> Twitter
                      </a>
                    }
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    {info?.social?.instagram === "" ? <h2> </h2> :
                      <a href={info?.social?.instagram} target={'_blank'} className={classes["afterProfile__info-links"]}>
                        <i className="fa-brands fa-instagram afterProfile__info-icon"></i> Instagram
                      </a>
                    }
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    {info?.social?.linkedin === "" ? <h2> </h2> :
                      <a href={info?.social?.linkedin} target={'_blank'} className={classes["afterProfile__info-links"]}>
                        <i className="fa-brands fa-linkedin afterProfile__info-icon"></i> Linkedin
                      </a>
                    }
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    {info?.social?.facebook === "" ? <h2> </h2> :
                      <a href={info?.social?.facebook} target={'_blank'} className={classes["afterProfile__info-links"]}>
                        <i className="fa-brands fa-facebook afterProfile__info-icon"></i> Facebook
                      </a>
                    }
                  </li>

                </ul>

              </div>

              <div className={classes["afterProfile__info-bottom"]}>
                <Link className={classes["afterProfile__info-btn"]} to="/editprofile">Edit profile</Link>
                <Link className={classes["afterProfile__info-btn"]} to="/editprofile/social">Edit social</Link>
              </div>

            </div>
          </div>

          {/* Ish joyini qo'shish */}
          <div className={classes["afterProfile__experiences"]}>
            <p className={classes["afterProfile__content-title"]}>
              Experiences
            </p>

            <div className={classes["afterProfile__experiences-item"]}>
              {experiences ?
                (
                  <div className={classes["afterProfile__experiences-not"]}>
                    <p className={classes["afterProfile__experiences-not-title"]}>
                      No Experience Added.
                    </p>
                  </div>
                ) :
                (
                  <Experinces />
                )}

              <Link to="/addexperience" className={classes["afterProfile__experiences-btn"]}>
                Add
              </Link>
            </div>
          </div>

          {/* O'qish joyini qo'shish */}
          <div className={classes["afterProfile__educations"]}>
            <p className={classes["afterProfile__content-title"]}>
              Educations
            </p>

            <div className={classes["afterProfile__educations-item"]}>
              {educations ?
                (
                  <div className={classes["afterProfile__educations-not"]}>
                    <p className={classes["afterProfile__educations-not-title"]}>
                      No Education Added.
                    </p>
                  </div>
                ) :
                (
                  <Educations />
                )}

              <Link to="/addeducation" className={classes["afterProfile__educations-btn"]}>
                Add
              </Link>
            </div>

          </div>

          {/* Git Repos */}
          <div className={classes["afterProfile__git"]}>
            <p className={classes["afterProfile__content-title"]}>
              Recent Git Repos
            </p>

            <Git />

          </div>

          {/* Delete */}
          <div className={classes["afterProfile__delete"]}>
            <p className={classes["afterProfile__delete-title"]}>!!!DANGER ZONE!!!</p>
            <p className={classes["afterProfile__delete-text"]}>This area is so dangerous. You may delete all your data by accident in here! PLEASE BE CAREFUL!!!</p>
            <button onClick={handleDeleteBtn} className={classes["afterProfile__delete-btn"]}>Delete account</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AfterProfile