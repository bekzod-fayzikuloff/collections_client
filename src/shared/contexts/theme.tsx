import React, {createContext, useState} from "react"
import {Props} from "./AuthContext";

type Theme = "light" | "dark" | undefined | string

type ThemeContextType = {
  theme: Theme,
  setTheme: (_: string) => void,
  handleThemeChange: () => void

}

export const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  setTheme: (_: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  handleThemeChange: () => {}
})

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): Theme => {
    const localStorageTheme = localStorage.getItem('default-theme') as Theme;
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  const [theme, setTheme] = useState<Theme | string>(getDefaultTheme());

  const contextData = {
    theme,
    setTheme,
    handleThemeChange
  }

  return (
    <ThemeContext.Provider value={contextData}>{children} </ThemeContext.Provider>
  )
}