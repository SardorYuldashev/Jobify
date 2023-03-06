import React from 'react'
import { Link } from 'react-router-dom'
import classes from './beforeprofile.module.scss'
import { useTranslation } from 'react-i18next';

const BeforeProfile = () => {
  const {t} = useTranslation()
  return (
    <div className={classes["profile"]}>
      <p className={classes["profile-title"]}>
        {t("hello")}
      </p>

      <p className={classes["profile-text"]}>
        {t("notCreated")}
      </p>

      <Link to="/create-profile" className={classes["profile-btn"]}>
        {t("createProfile")}
      </Link>
    </div>
  )
}

export default BeforeProfile