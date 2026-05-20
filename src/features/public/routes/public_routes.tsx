import { Route } from 'react-router-dom';

import HomePage from '../pages/home_page';

export const publicRoutes = [
  <Route
    key="home"
    path="/"
    element={<HomePage />}
  />,
];