import { useDispatch as useAppDispatch } from 'react-redux'
import type { AppDispatch } from '@/libs/store'

const useDispatch: () => AppDispatch = useAppDispatch

export default useDispatch
