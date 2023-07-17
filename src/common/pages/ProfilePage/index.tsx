import style from "./ProfilePage.module.scss"
import NoImage from "../../../assets/no-photo.png"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {ICollection} from "../../../shared/types/collections";
import {useNavigate} from "react-router-dom";
import {api} from "../../../shared/api";

export const ProfilePage = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [collections, setCollections] = useState<ICollection []>([])
  useEffect(() => {
    api.getCollections().then(r => {
      setCollections(r.data)
    })
  }, [])

  return (
    <div className={style.root}>
      <div className={style.inner}>
        <div className={style.collection__set}>
          <p className={style.category_title}>{t("common.collections")}</p>
          <div className={style.collection_root}>
          {
            collections.map(collection => (
                <div
                  onClick={() => navigate(`/collections/${collection.id}`)} key={collection.id}
                  style={
                    collection.image ? {
                      backgroundImage: `url(${collection.image})`,
                    } :
                      {
                        backgroundImage: `url(${NoImage})`,
                      }
                  }
                  className={style.collection}>
                  <p>{collection.title}</p>
                </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}