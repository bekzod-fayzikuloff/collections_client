import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import style from "./HomePage.module.scss"
import {useEffect, useState} from "react";
import {IItem} from "../../../shared/types/items";
import {api} from "../../../shared/api";
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import {IBiggestCollection} from "../../../shared/types/collections";
import {useTranslation} from "react-i18next";
import NoImage from "../../../assets/no-photo.png";


const LatestItems = () => {
  const [latestItems, setLatestItems] = useState<IItem[]>([])
  const navigate = useNavigate()
  const {t} = useTranslation()
  useEffect(() => {
    api.getLatestItems(5).then(r => {
      setLatestItems(r.data)
    })
  }, [])

  return (
    <div>
      <h3 className={style.latest__headline}>Latest items</h3>
      <List sx={{width: '100%'}}>
        {latestItems.map(item => (
          <Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={<>
                  <p>{t('common.item')}:
                    <span className={style.active__link} onClick={() => {
                      navigate(`/collections/${item.collectionId}`)
                    }}
                    >{item.title}</span>
                  </p>
                  <>{t('common.collection')}: <span className={style.active__link} onClick={() => {
                    navigate(`/collections/${item.collectionId}`)
                  }}>{item.collection.title}</span> {t('common.author')}: {item.collection.user?.username}</>
                </>
                }
              />
            </ListItem>
            <Divider component="li"/>
          </Fragment>
        ))}

      </List>
    </div>
  );
}


const BiggestCollection = () => {
  const [collections, setCollections] = useState<IBiggestCollection[]>([])
  const {t} = useTranslation()
  const navigate = useNavigate()
  useEffect(() => {
    api.getBiggestCollections(5).then(r => {
      setCollections(r.data)
    })
  }, [])

  return (
    <div className={style.inner}>
      <div className={style.collection__set}>
        <p className={style.category_title}>
          {t("common.biggestCollections")}
        </p>
        <div className={style.collection_root}>
          {
            collections.map(collection => (
              <div
                style={
                  collection.collection.image ? {
                      backgroundImage: `url(${collection.collection.image})`,
                    } :
                    {
                      backgroundImage: `url(${NoImage})`,
                    }
                }
                onClick={() => navigate(`/collections/${collection.collection.id}`)} key={collection.collection.id}
                className={style.collection}>
                <p>{collection.collection.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export const HomePage = () => {
  return (
    <div className={style.root}>
      <BiggestCollection />
      <LatestItems/>
    </div>
  )
}
