import styled from 'styled-components'

export const StyledSelectorListItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected?: boolean }>`
	display: flex;
	align-items: center;
	gap: 0 ${({ theme }) => theme.spacing.lg};
	padding: ${({ theme }) => theme.spacing.lg};
	border-bottom: 1px solid ${({ theme }) => theme.color.main};
	cursor: pointer;

	&:last-of-type {
		border-bottom: none;
	}

	&:hover {
		background-color: ${({ theme }) => theme.color.base};
	}
`

export const StyledSelectedLabel = styled.span`
	background-color: ${({ theme }) => theme.color.accent};
	color: ${({ theme }) => theme.color.white};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};

	&::before {
		content: '選択中';
		padding: 0 ${({ theme }) => theme.spacing.xs};
		${({ theme }) => theme.font('xs')};
		white-space: nowrap;
	}
`
