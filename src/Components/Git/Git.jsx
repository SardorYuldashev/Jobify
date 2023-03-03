import React from 'react'
import classes from './git.module.scss'

const Git = () => {
  return (
    <div className={classes["git"]}>
      <ul className={classes["git__list"]}>

        <li className={classes["git__list-li"]}>

          {/* Informaton */}
          <a href='!#' className={classes["git__list-info"]}>
            <p className={classes["git__list-title"]}>
              MaterialX
            </p>

            <p className={classes["git__list-text"]}>
              Created at: 03/01/1994
            </p>

            <p className={classes["git__list-text"]}>
              Main language:
            </p>

            <p className={classes["git__list-text"]}>
              Main branch: main
            </p>

            <p className={classes["git__list-text"]}>
              Visibility: public
            </p>
          </a>



          {/* Tags */}
          <div className={classes["git__list-tags"]}>

            <p className={classes["git__list-tag"]}>
              Watchers: <span>3</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Issues: <span>0</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Forks: <span>0</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Stars: <span>3</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Pages: <span>x</span>
            </p>
          </div>
        </li>

        <li className={classes["git__list-li"]}>

          {/* Informaton */}
          <a href='!#' className={classes["git__list-info"]}>
            <p className={classes["git__list-title"]}>
              MaterialX
            </p>

            <p className={classes["git__list-text"]}>
              Created at: 03/01/1994
            </p>

            <p className={classes["git__list-text"]}>
              Main language:
            </p>

            <p className={classes["git__list-text"]}>
              Main branch: main
            </p>

            <p className={classes["git__list-text"]}>
              Visibility: public
            </p>
          </a>



          {/* Tags */}
          <div className={classes["git__list-tags"]}>

            <p className={classes["git__list-tag"]}>
              Watchers: <span>3</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Issues: <span>0</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Forks: <span>0</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Stars: <span>3</span>
            </p>

            <p className={classes["git__list-tag"]}>
              Pages: <span>x</span>
            </p>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Git