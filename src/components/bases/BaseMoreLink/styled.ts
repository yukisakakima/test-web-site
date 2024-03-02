import styled from 'styled-components'

export const StyledMoreLinkWrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.accent};
`

export const StyledMoreLinkText = styled.span`
	&:hover {
		text-decoration: underline;
	}
`

export const StyledMoreLinkIcon = styled.div`
	display: flex;
	width: 14px;
	height: 14px;
	margin-left: ${({ theme }) => theme.spacing.sm};
`
