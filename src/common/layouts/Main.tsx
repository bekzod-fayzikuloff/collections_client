import {Outlet} from 'react-router-dom';
import {Header} from "../../components/Header";
import {useContext} from "react";
import {ThemeContext} from "../../shared/contexts/theme";

export function MainLayout() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={`theme-${theme}`}>
      <Header/>
        <main className={`layout__main`}>
          <Outlet/>
        </main>
      </div>
    </>
  );
}