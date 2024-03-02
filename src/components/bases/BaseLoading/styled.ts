import styled, { css } from 'styled-components'

export const StyledLoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const StyledLoading = styled('div').withConfig({
	shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size: 'small' | 'medium' | 'large' }>`
	border-style: solid;
	border-color: ${({ theme }) => theme.color.accent} ${({ theme }) => theme.color.main}
		${({ theme }) => theme.color.main} ${({ theme }) => theme.color.main};
	border-radius: ${({ theme }) => theme['border-radius'].full};
	position: relative;
	-webkit-animation: spin 2s infinite;
	animation: spin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;

	${({ size }) => {
		switch (size) {
			case 'large':
				return css`
					border-width: 4px;
					width: 56px;
					height: 56px;
				`
			case 'medium':
				return css`
					border-width: 4px;
					width: 40px;
					height: 40px;
				`
			default:
				return css`
					border-width: 2px;
					width: 20px;
					height: 20px;
				`
		}
	}}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
`
