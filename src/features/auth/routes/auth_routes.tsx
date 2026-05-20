import { Route } from 'react-router-dom';

import RegisterPage from '../pages/register_page';

import LoginPage from '../pages/login_page';

export const authRoutes = [
  <Route
    key="register"
    path="/register"
    element={<RegisterPage />}
  />,

  <Route
    key="login"
    path="/login"
    element={<LoginPage />}
  />,
];