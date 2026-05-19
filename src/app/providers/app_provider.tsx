import type { ReactNode } from 'react';

import QueryProvider from './query_provider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({
  children,
}: AppProviderProps) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default AppProvider;