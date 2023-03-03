import React from 'react'
import { Link } from 'react-router-dom'
import classes from './afterprofile.module.scss'
import avatar from '../../assets/avatar.png'
import Experinces from '../Experinces/Experinces'
import Educations from './../Educations/Educations';
import Git from '../Git'

const AfterProfile = () => {
  let experiences = true
  let educations = true





  return (
    <div className={classes["afterProfile"]}>
      <div className="container">
        <div className={classes["afterProfile__content"]}>
          {/* Приветствие */}
          <div className={classes["afterProfile__greeting"]}>
            <p className={classes["afterProfile__content-title"]}>
              Hello, Person
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
                      Email: <a href="email">example@mail.ru</a>
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Status: Looking for new opportunities
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Location: USA
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Bio: Bio
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Joined at: 02/03/2023
                    </p>
                  </li>
                </ul>

                <ul className={classes["afterProfile__info-list"]}>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Company: Apple Inc.
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Website: <a href="email">https://apple.com</a>
                    </p>
                  </li>

                  <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Skills: HTML CSS JS
                    </p>
                  </li>
                </ul>

                <ul className={classes["afterProfile__info-list"]}>

                  {/* <li className={classes["afterProfile__info-li"]}>
                    <p className={classes["afterProfile__info-text"]}>
                      Company: Apple Inc.
                    </p>
                  </li> */}
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
            <button className={classes["afterProfile__delete-btn"]}>Delete account</button>
          </div>




        </div>
      </div>
    </div>
  )
}

export default AfterProfile