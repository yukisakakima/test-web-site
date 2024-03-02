import styled from 'styled-components'

export const StyledModalOverlay = styled('div').withConfig({
	shouldForwardProp: (prop) => !['isOpen', 'onClose'].includes(prop),
})<{ isOpen: boolean; onClose?: () => void }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.color.overlay};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	cursor: ${({ onClose }) => (onClose ? 'pointer' : undefined)};
	transition: ${({ theme }) => theme.transition};
	z-index: 10;
`

export const StyledModal = styled('div').withConfig({
	shouldForwardProp: (prop) => !['isOpen', 'maxWidth'].includes(prop),
})<{ isOpen: boolean; maxWidth: number }>`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	max-width: ${({ maxWidth }) => `${maxWidth}px`};
	width: 100%;
	min-height: 180px;
	padding: ${({ theme }) => theme.spacing['4xl']};
	background-color: ${({ theme }) => theme.color.white};
	transition: ${({ theme }) => theme.transition};
	border-radius: ${({ theme }) => theme['border-radius']['rounded-md']};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transform: translate(-50%, -50%);
	z-index: 10;
`

export const StyledModalCloseIcon = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 18px;
	height: 18px;
	cursor: pointer;
	user-select: none;
	svg {
		fill: ${({ theme }) => theme.color.black};
	}
`
