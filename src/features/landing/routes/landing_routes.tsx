import { Route } from 'react-router-dom';

import HomePage from '../pages/home_page';

export const landingRoutes = [
  <Route
    key="home"
    path="/"
    element={<HomePage />}
  />,
];