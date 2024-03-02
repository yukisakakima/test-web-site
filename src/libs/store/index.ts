import { configureStore } from '@reduxjs/toolkit'
import authSlice from '@/libs/store/slice/authSlice'
import toastSlice from '@/libs/store/slice/toastSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
