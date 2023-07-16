import {ThemeProvider} from "./shared/contexts/theme";
import './App.scss'
import "./shared/i18n/config"
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "./common/admin";
import {SignInPage} from "./common/pages/SignInPage";
import {SignUpPage} from "./common/pages/SignUpPage";
import {AdminRoute} from "./components/AdminRoute";
import {AuthProvider} from "./shared/contexts/AuthContext";
import {NotFound} from "./common/pages/NotFound";
import {MainLayout} from "./common/layouts/Main";
import {HomePage} from "./common/pages/HomePage/HomePage";
import {ProfilePage} from "./common/pages/ProfilePage";
import {LangProvider} from "./shared/contexts/LangContext";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
            <Route path="/sign-in" element={<SignInPage/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>

            <Route path="/admin" element={<AdminRoute/>}>
              <Route index element={<AdminDashboard/>}/>
              <Route path={'*'} element={<AdminDashboard/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  )
}

export default App
