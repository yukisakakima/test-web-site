import styled from 'styled-components'

export const StyledBackToLinkWrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.accent};
`

export const StyledBackToLinkText = styled.span`
	${({ theme }) => theme.font('xs')}
	&:hover {
		text-decoration: underline;
	}
`

export const StyledBackToLinkIcon = styled.div`
	display: flex;
	width: 12px;
	height: 12px;
	margin-right: ${({ theme }) => theme.spacing.sm};
`
