import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isLogin: boolean | null
}

const initialState: AuthState = {
  //!変更nullからfalseに変えた
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
  },
})

export const { setLogin } = authSlice.actions

export default authSlice.reducer
