import { ThemeProvider } from './shared/contexts/theme';
import './shared/i18n/config';
import { Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './common/admin';
import { SignInPage } from './common/pages/SignInPage';
import { SignUpPage } from './common/pages/SignUpPage';
import { AdminRoute } from './components/AdminRoute';
import { AuthProvider } from './shared/contexts/AuthContext';
import { NotFound } from './common/pages/NotFound';
import { MainLayout } from './common/layouts/Main';
import { HomePage } from './common/pages/HomePage';
import { ProfilePage } from './common/pages/ProfilePage';
import { LangProvider } from './shared/contexts/LangContext';
import { CollectionPage } from './common/pages/CollectionPage';
import { ConfirmProvider } from 'material-ui-confirm';
import { ItemPage } from './common/pages/ItemPage';

export const App = () => {
  return (
    <ThemeProvider>
      <LangProvider>
        <AuthProvider>
          <ConfirmProvider>
            <Routes>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />

              <Route path="/admin" element={<AdminRoute />}>
                <Route index element={<AdminDashboard />} />
                <Route path={'*'} element={<AdminDashboard />} />
              </Route>

              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path={'/collections/:id'} element={<CollectionPage />} />
                <Route path={'/items/:id'} element={<ItemPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ConfirmProvider>
        </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  );
};
