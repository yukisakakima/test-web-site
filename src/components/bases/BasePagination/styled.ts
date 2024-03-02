import styled from 'styled-components'

export const StyledPagination = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 ${({ theme }) => theme.spacing.md};
`

export const StyledPaginationItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['isActivePage'].includes(prop),
})<{ isActivePage: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border: 1px solid ${({ theme }) => theme.color.accent};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	transition: ${({ theme }) => theme.transition};
	background-color: ${({ theme, isActivePage }) => (isActivePage ? theme.color.accent : theme.color.white)};
	color: ${({ theme, isActivePage }) => (isActivePage ? theme.color.white : theme.color.accent)};
	cursor: ${({ isActivePage }) => (isActivePage ? undefined : 'pointer')};
	pointer-events: ${({ isActivePage }) => (isActivePage ? 'none' : 'auto')};

	&:hover {
		background-color: ${({ theme }) => theme.color.accent};
		color: ${({ theme }) => theme.color.white};
	}
`

export const StyledPaginationButton = styled('li').withConfig({
	shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<{ isActive: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border: 1px solid ${({ theme }) => theme.color.accent};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	transition: ${({ theme }) => theme.transition};
	background-color: ${({ theme, isActive }) => (isActive ? theme.color.white : theme.color.accent)};
	cursor: ${({ isActive }) => (isActive ? 'pointer' : undefined)};
	pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};

	svg {
		transition: ${({ theme }) => theme.transition};
	}

	&:hover {
		background-color: ${({ theme }) => theme.color.accent};

		svg {
			fill: ${({ theme }) => theme.color.white};
		}
	}
`
