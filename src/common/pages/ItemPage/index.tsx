import style from './ItemPage.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../../../shared/api';
import { useParams } from 'react-router-dom';

export const ItemPage = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.getItem(id as string).then((r) => {
      setItem(r.data);
    });
  }, [id]);
  console.log(item);

  return (
    <div className={style.root}>
      <p>ItemPage</p>
    </div>
  );
};
