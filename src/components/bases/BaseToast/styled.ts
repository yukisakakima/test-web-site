import styled from 'styled-components'

interface StyedToastProps {
	status: 'success' | 'error'
	isOpen: boolean
}

export const StyedToast = styled('div').withConfig({
	shouldForwardProp: (prop) => !['status', 'isOpen'].includes(prop),
})<StyedToastProps>`
	position: fixed;
	top: 64px;
	left: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0 ${({ theme }) => theme.spacing.sm};
	min-width: 300px;
	max-width: 420px;
	padding: ${({ theme }) => theme.spacing.lg};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	transform: translateX(-50%);
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transition: ${({ theme }) => theme.transition};
	z-index: 10;
`

export const StyedToastMessage = styled.span`
	flex: 1;
`

export const StyedToastCloseIcon = styled.button`
	display: inline-flex;
`
