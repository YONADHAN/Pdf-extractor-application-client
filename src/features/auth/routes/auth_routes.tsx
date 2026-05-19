import { Route } from 'react-router-dom';

import RegisterPage from '../pages/register_page';

export const authRoutes = [
  <Route
    key="register"
    path="/register"
    element={<RegisterPage />}
  />,
];