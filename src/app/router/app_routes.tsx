import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import AuthRoute from '@/shared/routes/AuthRoute';

import PrivateRoute from '@/shared/routes/PrivateRoute';

import { authRoutes } from '@/features/auth/routes/auth_routes';
import { publicRoutes } from '@/features/public/routes/public_routes';
import { pdfRoutes } from '@/features/pdf/routes/pdf_routes';
import DashboardLayout from '@/shared/layouts/dashboard_layout';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>



        {/* Public route */}
        {publicRoutes}


        {/* Auth route protection */}
        <Route element={<AuthRoute />}>
          {authRoutes}
        </Route>


        {/* Private route protection */}
        <Route element={<PrivateRoute />}>
          <Route
            element={<DashboardLayout />}
          >
            {pdfRoutes}
          </Route>
        </Route>



      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;