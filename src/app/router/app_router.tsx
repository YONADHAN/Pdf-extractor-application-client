import { BrowserRouter, Routes } from 'react-router-dom';

import { authRoutes } from '@/features/auth/routes/auth_routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>{authRoutes}</Routes>
    </BrowserRouter>
  );
};

export default AppRouter;