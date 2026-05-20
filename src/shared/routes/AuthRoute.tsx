import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux_hooks';

const AuthRoute = () => {
  const user = useAppSelector(
    (state) => state.auth.user,
  );

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthRoute;