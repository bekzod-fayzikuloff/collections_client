import style from "./CollectionPage.module.scss"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../shared/api";
import {IItem} from "../../../shared/types/items";

export const CollectionPage = () => {
  const { id } = useParams()
  const [items, setItems] = useState<IItem[]>([])

  useEffect(() => {
    api.getCollectionItems(id as string).then(r => {
      setItems(r.data)
    })
  }, [id])

  return (
    <>

    <div className={style.root}>
      {items.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
    </>
  )
}