import { useAuth }
  from '@/shared/hooks/use_auth';

const Topbar = () => {
    
 const user =
  useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-6">
     
      <div>
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

        <p className="text-sm text-zinc-500">
          Welcome back
        </p>
      </div>

     
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
          {user?.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-zinc-500">
            {
              user?.email
            }
          </p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;