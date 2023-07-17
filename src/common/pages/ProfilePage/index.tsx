import style from "./ProfilePage.module.scss"
import NoImage from "../../../assets/no-photo.png"
import {useTranslation} from "react-i18next";

export const ProfilePage = () => {
  const {t} = useTranslation()
  return (
    <div className={style.root}>
      <div className={style.inner}>
        <div className={style.collection__set}>
          <p className={style.category_title}>{t("common.collections")}</p>

            <div className={style.collection_root}>
              <div
                style={
                  {
                    backgroundImage: `url(${NoImage})`,
                  }
                }
                className={style.collection}>
                <p>Item1</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}