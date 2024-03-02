import { TypedUseSelectorHook, useSelector as useAppSelector } from 'react-redux'
import type { RootState } from '@/libs/store'

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export default useSelector
