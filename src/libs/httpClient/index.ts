import axios, { AxiosError } from 'axios'
import { store } from '@/libs/store'
import { onToastOpen } from '@/libs/store/slice/toastSlice'

const httpClient = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

httpClient.defaults.withCredentials = true

httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    const data = error.response?.data

    if (error.response?.status === 500) {
      store.dispatch(
        onToastOpen({
          status: 'error',
          message: '予期せぬエラーが発生しました。',
        })
      )
      return Promise.reject(data)
    }

    store.dispatch(
      onToastOpen({
        status: 'error',
        message: '予期せぬエラーが発生しました。',
      })
    )
    return Promise.reject(data)
  }
)

export default httpClient
