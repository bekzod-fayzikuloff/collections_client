import {ThemeProvider} from "./shared/contexts/theme";
import './App.scss'
import {Header} from "./components/Header";
import "./shared/i18n/config"
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "./common/admin";
import {SignInPage} from "./common/pages/SignInPage";
import {SignUpPage} from "./common/pages/SignUpPage";
import {AdminRoute} from "./components/AdminRoute";
import {AuthProvider} from "./shared/contexts/AuthContext";
import {NotFound} from "./common/pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <Routes>
        <Route path="/" element={
          <Header/>
        } />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
          <Route path={'*'} element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default App
