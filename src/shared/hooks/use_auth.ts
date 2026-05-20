import { useAppSelector } from './redux_hooks';

export const useAuth = () => {
  return useAppSelector(
    (state) => state.auth.user,
  );
};

//const user = useAuth();