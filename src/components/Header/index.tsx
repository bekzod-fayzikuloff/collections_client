import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTranslation } from 'react-i18next';
import '../styles.scss';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AuthContext } from '../../shared/contexts/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LangContext } from '../../shared/contexts/LangContext';
import CL from '../../assets/cl.svg';
import { useConfirm } from 'material-ui-confirm';
import { api } from '../../shared/api';

const LangSelect = () => {
  const { t } = useTranslation();
  const { lang, changeLang } = useContext(LangContext);

  const handleChange = (event: SelectChangeEvent) => {
    changeLang(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{t('common.lang')}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={lang}
        label={t('common.lang')}
        onChange={handleChange}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'be'}>Беларускі</MenuItem>
        <MenuItem value={'ru'}>Русский</MenuItem>
        <MenuItem value={'pl'}>Polski</MenuItem>
      </Select>
    </FormControl>
  );
};

export const Header = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const confirm = useConfirm();
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isExistItems, setIsExistItems] = useState(false);

  const { user, logoutUser } = useContext(AuthContext);

  const logoutHandler = () => {
    confirm({
      title: `${t('common.actions.delete.title')} ?`,
      description: `${t('common.actions.logout.dialog')} ?`,
      confirmationText: t('ra.action.confirm'),
      cancellationText: t('ra.action.cancel'),
    }).then(() => {
      logoutUser();
    });
  };

  useEffect(() => {
    api.getItemFilter(query).then((r) => {
      setSearchResult(r.data);
    });
    if (query && searchResult.length > 0) {
      setIsExistItems(true);
    } else setIsExistItems(false);
  }, [query, searchResult.length]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className={style.icon__container}>
          <img onClick={() => navigate('/')} className={style.icon} src={CL} alt="Collections Manager" />
        </div>

        <div className={style.search__group}>
          <nav className={style.head__bar}>
            <form className={style.search__input}>
              <input onChange={handleSearch} type="search" placeholder={`${t('components.header.search')}...`} />
              <SearchIcon />
            </form>
          </nav>
          {isExistItems && (
            <div className={style.search__result}>
              {/* eslint-disable */}
              {searchResult.map((itemIndex: any) => {
                return (
                  <p onClick={() => navigate(`/items/${itemIndex?._source?.id}`)} key={itemIndex?._source?.id}>
                    {itemIndex?._source?.title}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <div className={style.actions}>
          <LangSelect />
          <IconButton sx={{ ml: 1 }} onClick={handleThemeChange}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {user ? (
            <>
              <IconButton onClick={() => navigate('/profile')} sx={{ ml: 1 }}>
                <AccountCircleIcon />
              </IconButton>
              <IconButton onClick={logoutHandler} sx={{ ml: 1 }}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={() => navigate('/sign-in')} sx={{ ml: 1 }}>
              <LoginIcon />
            </IconButton>
          )}
        </div>
      </div>
    </header>
  );
};
