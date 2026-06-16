import {

    FolderOpen,

    LogOut,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';


import axiosInstance
    from '@/shared/api/axios';

import {
    useNavigate,
} from 'react-router-dom';

import { useAppDispatch } from '@/shared/hooks/redux_hooks';

import { clearUser } from '@/features/auth/redux/auth_slice';

const Sidebar = () => {
    const dispatch =
        useAppDispatch();

    const navigate =
        useNavigate();

    const handleLogout =
        async () => {
            try {
                await axiosInstance.post(
                    '/auth/logout',
                );
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(clearUser());

                navigate('/login');
            }
        };

    const navItems = [
        {
            label:
                'PDF Dashboard',
            icon: FolderOpen,
            path: '/pdf',
        },


    ];

    return (
        <aside className="hidden w-72 flex-col border-r border-zinc-200 bg-white lg:flex">
            {/* LOGO */}
            <div className="border-b border-zinc-200 px-6 py-5">
                <h1 className="text-2xl font-bold tracking-tight">
                    PDF Extractor
                </h1>

                <p className="mt-1 text-sm text-zinc-500">
                    Manage your PDFs
                </p>
            </div>

            {/* NAVIGATION */}
            <nav className="flex-1 space-y-2 p-4">
                {navItems.map(
                    (item) => {
                        const Icon =
                            item.icon;

                        return (
                            <NavLink
                                key={
                                    item.label
                                }
                                to={
                                    item.path
                                }
                                className={({
                                    isActive,
                                }) =>
                                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-zinc-700 hover:bg-zinc-100'
                                    }`
                                }
                            >
                                <Icon
                                    size={
                                        18
                                    }
                                />

                                {
                                    item.label
                                }
                            </NavLink>
                        );
                    },
                )}
            </nav>

            {/* FOOTER */}
            <div className="border-t border-zinc-200 p-4">
                <button
                    onClick={
                        handleLogout
                    }
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                    <LogOut
                        size={18}
                    />

                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;