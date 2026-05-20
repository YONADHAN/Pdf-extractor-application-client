import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { LoginUserData } from '../types/login_types';

interface AuthState {
  user: LoginUserData | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setUser: (
      state,
      action: PayloadAction<LoginUserData>,
    ) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  setUser,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;