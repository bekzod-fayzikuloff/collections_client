import { useState } from 'react'
import {ThemeContext} from "./shared/contexts/theme";
import './App.scss'
import {Header} from "./components/Header";
import "./shared/i18n/config"
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "./common/admin";
import {Theme} from "./shared/types/theme";
import {LoginPage} from "./common/pages/LoginPage";
import {RegisterPage} from "./common/pages/RegisterPage";
import {AdminRoute} from "./components/AdminRoute";
import {AuthProvider} from "./shared/contexts/AuthContext";
import {NotFound} from "./common/pages/NotFound";

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
      <AuthProvider>
      <Routes>
        <Route path="/" element={
          <div className={`theme-${theme}`}>
            <Header/>
          </div>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<AdminDashboard theme={theme as Theme} />} />
          <Route path={'*'} element={<AdminDashboard theme={theme as Theme} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </ThemeContext.Provider>
  )
}
export default App
