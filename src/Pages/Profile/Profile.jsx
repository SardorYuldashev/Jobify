import React from 'react'
import classes from './profile.module.scss'
import avatar from '../../assets/avatar.png'
import Experinces from './../../Components/Experinces';
import Educations from '../../Components/Educations';
import Git from './../../Components/Git';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  let experiences = !true
  let educations = !true


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

            <div className={classes["profile__info-item"]}>

                {/* User info 1 column: Avatar */}
                <div className={classes["profile__info-imgBox"]}>
                  <img className={classes["profile__info-img"]} src={avatar} alt="avatar" />
                </div>

                {/* User info 2 column: Person infi */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Email: <a href="email">example@mail.ru</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Status: Looking for new opportunities
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Location: USA
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Bio: Bio
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Joined at: 02/03/2023
                    </p>
                  </li>
                </ul>

                {/* User info 3 column: Job info */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Company: Apple Inc.
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Website: <a href="email">https://apple.com</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      Skills: HTML CSS JS
                    </p>
                  </li>
                </ul>

                {/* User info 4 column: Socials */}
                <ul className={classes["profile__info-list"]}>

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
                </ul>

            </div>
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