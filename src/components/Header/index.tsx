import {useContext} from 'react';
import {ThemeContext} from "../../shared/contexts/theme";
import {useTranslation} from "react-i18next";
import '../styles.scss';


export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo-section">
          <span>{t('header-title')}</span>
        </a>
        <div className="toggle-btn-section">
          <button onClick={() => changeLanguage("en")} >English</button>
          <button onClick={() => changeLanguage("be")} > Беларускі </button>
          <button onClick={() => changeLanguage("ru")}>Русский</button>
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};