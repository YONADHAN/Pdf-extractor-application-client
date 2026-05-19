import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import QueryProvider from './query_provider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({
  children,
}: AppProviderProps) => {
  return <QueryProvider>
    {children}
    <Toaster
      position="top-center"
      richColors
    />
  </QueryProvider>;
};

export default AppProvider;