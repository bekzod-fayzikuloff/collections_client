import { useState } from 'react'
import {ThemeContext} from "./shared/contexts/theme";
import './App.scss'
import {Header} from "./components/Header";
import "./shared/i18n/config"
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "./common/admin";

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/" element={
          <div className={`theme-${theme}`}>
            <Header/>
          </div>
        } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

    </ThemeContext.Provider>
  )
}
export default App
