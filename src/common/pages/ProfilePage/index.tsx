import style from './ProfilePage.module.scss';
import NoImage from '../../../assets/no-photo.png';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { ICollection } from '../../../shared/types/collections';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../shared/api';
import { AuthContext } from '../../../shared/contexts/AuthContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { AddCollectionModal } from '../../../components/CollectionCreate';

export const ProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [collections, setCollections] = useState<ICollection[]>([]);
  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    api.getUserCollections(user.userId).then((r) => {
      setCollections(r.data);
    });
  }, [user.userId]);

  return (
    <div className={style.root}>
      <div className={style.inner}>
        <div className={style.collection__set}>
          <p className={style.category_title}>{t('common.collections')}</p>
          <div className={style.collection_root}>
            {collections.map((collection) => (
              <div
                onClick={() => navigate(`/collections/${collection.id}`)}
                key={collection.id}
                style={
                  collection.image
                    ? {
                        backgroundImage: `url(${collection.image})`,
                      }
                    : {
                        backgroundImage: `url(${NoImage})`,
                      }
                }
                className={style.collection}
              >
                <p>{collection.title}</p>
              </div>
            ))}
          </div>
          <Button
            className={style.add__btn}
            variant="outlined"
            color={'success'}
            startIcon={<AddIcon />}
            onClick={() => setOpen(true)}
          >
            {t('ra.action.add')}
          </Button>
          <AddCollectionModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};
