import styled from 'styled-components'

export const StyledSelectorList = styled.ul`
	height: 288px;
	margin-top: ${({ theme }) => theme.spacing.lg};
	border: 1px solid ${({ theme }) => theme.color.main};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	overflow: auto;

	&::-webkit-scrollbar {
		width: 6px;
		margin-right: ${({ theme }) => theme.spacing.sm};
	}

	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.color.main};
		border-radius: ${({ theme }) => theme['border-radius'].rounded};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.color.accent};
		border-radius: ${({ theme }) => theme['border-radius']['rounded-md']};
	}
`
