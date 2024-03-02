import styled from 'styled-components'

export const StyledTab = styled.ul`
	display: flex;
	gap: ${({ theme }) => theme.spacing['2xl']};
`

export const StyledTabItem = styled('li').withConfig({
	shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<{ isActive?: boolean }>`
	padding: 0 8px 8px 8px;
	font-size: ${({ theme }) => theme.font('md')};
	cursor: pointer;
	border-bottom: ${({ theme, isActive }) => (isActive ? `2px solid ${theme.color.accent}` : 'none')};
`
