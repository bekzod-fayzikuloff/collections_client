import { useState } from 'react'
import {ThemeContext} from "./shared/contexts/theme";
import './App.scss'
import {Header} from "./components/Header";
import "./shared/i18n/config"

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );}

export default App
