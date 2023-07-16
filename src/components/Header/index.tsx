import {useContext} from 'react';
import {ThemeContext} from "../../shared/contexts/theme";
import {useTranslation} from "react-i18next";
import '../styles.scss';
import {IconButton} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {AuthContext} from "../../shared/contexts/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import {useNavigate} from "react-router-dom";
import style from "./Header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {LangContext} from "../../shared/contexts/LangContext";


const LangSelect = () => {

  const {lang, changeLang} = useContext(LangContext)

  const handleChange = (event: SelectChangeEvent) => {
    changeLang(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Language</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'be'}>Беларускі</MenuItem>
        <MenuItem value={'ru'}>Русский</MenuItem>
      </Select>
    </FormControl>
  )
}


export const Header = () => {
  const {theme, handleThemeChange} = useContext(ThemeContext);
  const {t} = useTranslation();
  const navigate = useNavigate()

  const {user} = useContext(AuthContext)


  return (
    <header className="header">
      <div className="header-content">

        <p>{t("header-title")}</p>
        <nav className={style.head__bar}>

          <form className={style.search__input}>
            <input type="search" placeholder="Search..."/>
            <SearchIcon/>
          </form>

        </nav>

        <LangSelect></LangSelect>
        <IconButton sx={{ml: 1}} onClick={handleThemeChange}>
          {theme === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
        <IconButton sx={{ml: 1}}>
          {
            user ? <AccountCircleIcon onClick={() => navigate("/profile")}/> : <LoginIcon/>
          }
        </IconButton>
      </div>
    </header>
  );
};