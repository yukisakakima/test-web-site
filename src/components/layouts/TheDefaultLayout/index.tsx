import { FC, ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledDefaultLayout, StyledDefaultLayoutInner } from './styled'
import { TheHeader, TheFooter } from '@/components/layouts'
import { BaseToast } from '@/components/bases'
import useDispatch from '@/hooks/useDispatch'
import useSelector from '@/hooks/useSelector'
import { onToastClose } from '@/libs/store/slice/toastSlice'

interface TheDefaultLayoutProps {
	children: ReactNode
}

const TheDefaultLayout: FC<TheDefaultLayoutProps> = ({ children }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { isOpen, message, status } = useSelector((state) => state.toast)

	useEffect(() => {
		if (status === 'error') {
			dispatch(onToastClose())
		}
	}, [location])

	return (
		<>
			<BaseToast status={status} message={message} isOpen={isOpen} onClose={() => dispatch(onToastClose())} />
			<TheHeader />
			<StyledDefaultLayout>
				<StyledDefaultLayoutInner>{children}</StyledDefaultLayoutInner>
			</StyledDefaultLayout>
			<TheFooter />
		</>
	)
}

export default TheDefaultLayout
