import {createContext} from "react"


export const ThemeContext = createContext({
  theme: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  setTheme: (_: string) => {}
})