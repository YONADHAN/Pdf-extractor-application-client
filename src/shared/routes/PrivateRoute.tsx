import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux_hooks';

const PrivateRoute = () => {
  const user = useAppSelector(
    (state) => state.auth.user,
  );

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;