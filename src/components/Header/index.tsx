import {useContext} from 'react';
import {ThemeContext} from "../../shared/contexts/theme";
import {useTranslation} from "react-i18next";
import '../styles.scss';
import {IconButton} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export const Header = () => {
  const {theme, handleThemeChange} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();


  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={`theme-${theme}`}>
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo-section">
            <span>{t('header-title')}</span>
          </a>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("be")}> Беларускі</button>
          <button onClick={() => changeLanguage("ru")}>Русский</button>

          <IconButton sx={{ml: 1}} onClick={handleThemeChange} color="inherit">
            {theme === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
          </IconButton>

        </div>
      </header>
    </div>
  );
};