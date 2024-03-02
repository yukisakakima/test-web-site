import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ToastStatus = 'success' | 'error'

export interface ToastState {
  status: ToastStatus
  message: string
  isOpen: boolean
}

const initialState: ToastState = {
  status: 'success',
  message: '',
  isOpen: false,
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    onToastOpen: (state, action: PayloadAction<{ status: ToastStatus; message: string }>) => {
      state.status = action.payload.status
      state.message = action.payload.message
      state.isOpen = true
    },
    onToastClose: (state) => {
      state.isOpen = false
    },
  },
})

export const { onToastOpen, onToastClose } = toastSlice.actions

export default toastSlice.reducer
