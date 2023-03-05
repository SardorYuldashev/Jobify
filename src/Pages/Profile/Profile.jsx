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
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  const [gitHubList, setGitHubList] = useState([])

  useEffect(() => {

    (async () => {
      try {
        let { data } = await axios.get(`/profile/user/${id}`)
        if (data) {

          let { data: gitHub } = await axios.get(`/profile/github/${data.githubusername}`)
          setGitHubList(gitHub)
          setUserInfo([data])
          setExperience(data.experience)
          setEducation(data.education)
        }
      } catch (error) {
        toast(error, { type: "error" })
      }
    })()
  }, [])

  let expLoad = experience.length === 0
  let educLoad = education.length === 0


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
              {userInfo[0]?.user.name} Info
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
                      <span>Email:</span> <a href="email">{item.user.email}</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Status:</span> {item.status}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Location:</span> {item.location}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Bio:</span> {item.bio}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Joined at:</span> {item.date.slice(0, 10)}
                    </p>
                  </li>
                </ul>

                {/* User info 3 column: Job info */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Company:</span> {item.company}
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Website:</span> <a href={item.website}>{item.website}</a>
                    </p>
                  </li>

                  <li className={classes["profile__info-li"]}>
                    <p className={classes["profile__info-text"]}>
                      <span>Skills:</span> {item.skills}
                    </p>
                  </li>
                </ul>

                {/* User info 4 column: Socials */}
                <ul className={classes["profile__info-list"]}>

                  <li className={classes["profile__info-li"]}>
                    {item?.social?.youtube === "" ? <h2> </h2> :
                      <a href={item?.social?.youtube} target={'_blank'} className={classes["profile__info-links"]}>
                        <i className="fa-brands fa-youtube profile__info-icon"></i> Youtube
                      </a>
                    }
                  </li>

                  <li className={classes["profile__info-li"]}>
                    {item?.social?.twitter === "" ? <h2> </h2> :
                      <a href={item?.social?.twitter} target={'_blank'} className={classes["profile__info-links"]}>
                        <i className="fa-brands fa-twitter profile__info-icon"></i> Twitter
                      </a>
                    }
                  </li>

                  <li className={classes["profile__info-li"]}>
                    {item?.social?.instagram === "" ? <h2> </h2> :
                      <a href={item?.social?.instagram} target={'_blank'} className={classes["profile__info-links"]}>
                        <i className="fa-brands fa-instagram profile__info-icon"></i> Instagram
                      </a>
                    }
                  </li>

                  <li className={classes["profile__info-li"]}>
                    {item?.social?.linkedin === "" ? <h2> </h2> :
                      <a href={item?.social?.linkedin} target={'_blank'} className={classes["profile__info-links"]}>
                        <i className="fa-brands fa-linkedin profile__info-icon"></i> Linkedin
                      </a>
                    }
                  </li>

                  <li className={classes["profile__info-li"]}>
                    {item?.social?.facebook === "" ? <h2> </h2> :
                      <a href={item?.social?.facebook} target={'_blank'} className={classes["profile__info-links"]}>
                        <i className="fa-brands fa-facebook profile__info-icon"></i> Facebook
                      </a>
                    }
                  </li>
                </ul>

              </div>
            )}

          </div>

          {/* Ish joyini qo'shish */}
          <div className={classes["profile__experiences"]}>
            <p className={classes["profile__content-title"]}>
              Experiences
            </p>

            <div className={classes["profile__experiences-item"]}>
              {expLoad ?
                (
                  <div className={classes["profile__experiences-not"]}>
                    <p className={classes["profile__experiences-not-title"]}>
                      No Experience Added.
                    </p>
                  </div>
                ) :
                (
                  // Shu joyidan pasti ko'rinishi kerak                  
                  <div className={classes["profile__experiences"]}>
                    <ul className={classes["profile__experiences__list"]}>
                      {experience.map((item) =>
                        <li key={item._id} className={classes["profile__experiences__list-li"]}>
                          <div className={classes["profile__experiences__list-info"]}>

                            <h2 className={classes["profile__experiences__list-title"]}>
                              <span className={classes["profile__experiences__list-status"]}>{item.title}</span>
                              <span> at </span>
                              <span className={classes["profile__experiences__list-company"]}>{item.company}</span>
                            </h2>

                            <p className={classes["profile__experiences__list-text"]}>
                              <span>From:</span> {item.from.slice(0, 10)}
                            </p>

                            <p className={classes["profile__experiences__list-text"]}>
                              <span>Until:</span> {(!item.to) ? "Now" : item.to.slice(0, 10)}
                            </p>

                            <p className={classes["profile__experiences__list-text"]}>
                              <span>Location:</span> {item.location}
                            </p>

                            <p className={classes["profile__experiences__list-text"]}>
                              <span>Description:</span> {item.description}
                            </p>
                          </div>
                        </li>)
                      }



                    </ul>
                  </div>
                )}
            </div>
          </div>

          {/* O'qish joyini qo'shish */}
          <div className={classes["profile__educations"]}>
            <p className={classes["profile__content-title"]}>
              Educations
            </p>

            <div className={classes["profile__educations-item"]}>
              {educLoad ?
                (
                  <div className={classes["profile__educations-not"]}>
                    <p className={classes["profile__educations-not-title"]}>
                      No Education Added.
                    </p>
                  </div>
                ) :
                (
                  <div className={classes["profile__educations"]}>
                    <ul className={classes["profile__educations__list"]}>

                      {education.map((item) =>
                        <li key={item._id} className={classes["profile__educations__list-li"]}>
                          <div className={classes["profile__educations__list-info"]}>

                            <h2 className={classes["profile__educations__list-title"]}>
                              <span className={classes["profile__educations__list-status"]}>{item.degree}</span>
                              <span> at </span>
                              <span className={classes["profile__educations__list-company"]}>{item.school}</span>
                            </h2>

                            <p className={classes["profile__educations__list-text"]}>
                              <span>From:</span> {item.from.slice(0, 10)}
                            </p>

                            <p className={classes["profile__educations__list-text"]}>
                              <span>Until:</span> {(!item.to) ? "Now" : item.to.slice(0, 10)}
                            </p>

                            <p className={classes["profile__educations__list-text"]}>
                              <span>Location:</span> {item.fieldofstudy}
                            </p>

                            <p className={classes["profile__educations__list-text"]}>
                              <span>Description:</span> {item.description}
                            </p>
                          </div>
                        </li>)
                      }

                    </ul>
                  </div>
                )}
            </div>

          </div>

          {/* Git Repos */}
          {gitHubList.length > 0 ?
            <div className={classes["profile__git"]}>
              <p className={classes["profile__content-title"]}>
                Recent Git Repos
              </p>

              {gitHubList.length > 0 ? gitHubList?.map((item) => (
                <li key={item.id} className={classes["git__list-li"]}>


                  <a href={item.html_url} target={'_blank'} className={classes["git__list-info"]}>
                    <p className={classes["git__list-title"]}>
                      {item.name}
                    </p>

                    <p className={classes["git__list-text"]}>
                      Created at: {item.created_at.slice(0, 10)}
                    </p>

                    <p className={classes["git__list-text"]}>
                      Main language: {item.language}
                    </p>

                    <p className={classes["git__list-text"]}>
                      Main branch: {item.default_branch}
                    </p>

                    <p className={classes["git__list-text"]}>
                      Visibility: {item.visibility}
                    </p>
                  </a>


                  <div className={classes["git__list-tags"]}>

                    <p className={classes["git__list-tag"]}>
                      Watchers: <span>{item.size}</span>
                    </p>

                    <p className={classes["git__list-tag"]}>
                      Issues: <span>{item.open_issues}</span>
                    </p>

                    <p className={classes["git__list-tag"]}>
                      Forks: <span>{item.forks}</span>
                    </p>

                    <p className={classes["git__list-tag"]}>
                      Stars: <span>{item.stargazers_count}</span>
                    </p>

                    <p className={classes["git__list-tag"]}>
                      Pages: <span>{item.watchers}</span>
                    </p>
                  </div>
                </li>
              )) :
                <h2> </h2>
              }
            </div> :
            <h2> </h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile