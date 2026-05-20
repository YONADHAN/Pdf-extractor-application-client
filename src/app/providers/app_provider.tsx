import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import QueryProvider from './query_provider';
import ReduxProvider from './redux_provider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({
  children,
}: AppProviderProps) => {
  return <ReduxProvider>
    <QueryProvider>
      {children}
      <Toaster
        position="top-center"
        richColors
      />
    </QueryProvider>
  </ReduxProvider>;
};

export default AppProvider;