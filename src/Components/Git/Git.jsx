import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from './git.module.scss'
import { useSelector } from 'react-redux';

const Git = () => {

  // Keyin yana ko'rib chiqish kerak==================================
  const { info } = useSelector(({ user }) => user)
  let gitUserName = info.githubusername

  const [gitHub, setGitHub] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getGitHub() {
      try {
        setLoading(true)
        let { data } = await axios.get(`/profile/github/${gitUserName}`)
        setGitHub(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getGitHub()
  }, [])

  let gitLoad = gitHub.lenght === 0
  console.log(gitHub);

  return (loading ? <h2> </h2> :
    <div className={classes["git"]}>
      <ul className={classes["git__list"]}>

        {gitHub.map((item) =>
          <li key={item.id} className={classes["git__list-li"]}>

            {/* Informaton */}
            <div className={classes["git__list-info"]}>
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
            </div>

            {/* Tags */}
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
        )}
      </ul>
    </div>
  )
}

export default Git