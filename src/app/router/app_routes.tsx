import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import AuthRoute from '@/shared/routes/AuthRoute';

import PrivateRoute from '@/shared/routes/PrivateRoute';

import { authRoutes } from '@/features/auth/routes/auth_routes';
import { landingRoutes } from '@/features/landing/routes/landing_routes';

// import { pdfRoutes } from '@/features/pdf/routes/pdf_routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>



        {/* Public route */}
        {landingRoutes}
       

        {/* Auth route protection */}
        <Route element={<AuthRoute />}>
          {authRoutes}
        </Route>


        {/* Private route protection */}
        <Route element={<PrivateRoute />}>
          {/* {pdfRoutes} */}
        </Route>



      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;