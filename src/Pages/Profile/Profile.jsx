import React, { useEffect, useState } from 'react'
import classes from './profile.module.scss'
import avatar from '../../assets/avatar.png'
import Experinces from './../../Components/Experinces';
import Educations from '../../Components/Educations';
import Git from './../../Components/Git';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {

    (async () => {
      try {
        let { data } = await axios.get(`/profile/user/${id}`)
        if (data) {
          setUserInfo([data])
        }



      } catch (error) {
        toast(error, { type: "error" })
      }
    })()
  }, [])

  console.log(userInfo[0]);


















  let experiences = true
  let educations = true


  return (
    <div className={classes["profile"]}>
      <div className="container">
        <div className={classes["profile__content"]}>

          <div className={classes["profile__content-buttons"]}>
            <button onClick={goBack} className={classes["profile__content-btn"]}>
              Go Back
            </button>
          </div>

          {/* User haqida ma'lumotlar */}
          <div className={classes["profile__info"]}>
            <p className={classes["profile__content-title"]}>
              User Info
            </p>


            {/* Dynamic info */}
            {userInfo.length === 0 ? <h2>Loading</h2> : userInfo.map((item) =>
              <div key={item._id} className={classes["profile__info-item"]}>

                {/* User info 1 column: Avatar */}
                <div className={classes["profile__info-imgBox"]}>
                  <img className={classes["profile__info-img"]} src={item.user.avatar} alt="Avatar" />
                </div>

                {/* User info 2 column: Person infi */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Email: <a href="email">{item.user.email}</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Status: {item.status}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Location: {item.location}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Bio: {item.bio}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Joined at: {item.date.slice(0, 10)}
                    </p>
                  </li>
                </ul>

                {/* User info 3 column: Job info */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Company: {item.company}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Website: <a href={item.website}>{item.website}</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Skills: {item.skills}
                    </p>
                  </li>
                </ul>

                {/* User info 4 column: Socials */}
                {/* <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Facebook
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Instagram
                    </p>
                  </li>
                </ul> */}

              </div>
            )}

          </div>

          {/* Ish joyini qo'shish */}
          <div className={classes["profile__experiences"]}>
            <p className={classes["profile__content-title"]}>
              Experiences
            </p>

            <div className={classes["profile__experiences-item"]}>
              {experiences ?
                (
                  <div className={classes["profile__experiences-not"]}>
                    <p className={classes["profile__experiences-not-title"]}>
                      No Experience Added.
                    </p>
                  </div>
                ) :
                (
                  <Experinces />
                )}
            </div>
          </div>

          {/* O'qish joyini qo'shish */}
          <div className={classes["profile__educations"]}>
            <p className={classes["profile__content-title"]}>
              Educations
            </p>

            <div className={classes["profile__educations-item"]}>
              {educations ?
                (
                  <div className={classes["profile__educations-not"]}>
                    <p className={classes["profile__educations-not-title"]}>
                      No Education Added.
                    </p>
                  </div>
                ) :
                (
                  <Educations />
                )}
            </div>

          </div>

          {/* Git Repos */}
          <div className={classes["profile__git"]}>
            <p className={classes["profile__content-title"]}>
              Recent Git Repos
            </p>

            <Git />
          </div>




        </div>
      </div>
    </div>
  )
}

export default Profile