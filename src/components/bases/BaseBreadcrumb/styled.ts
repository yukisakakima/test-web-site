import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledBreadcrumbList = styled.ul`
	display: flex;
	align-items: center;
`

export const StyledBreadcrumbItem = styled.li<{ link?: string }>`
	position: relative;
	${({ theme }) => theme.font('xs')};
	cursor: ${({ link }) => (link ? 'default' : undefined)};
`

export const StyledBreadcrumbLink = styled(Link)`
	color: ${({ theme }) => theme.color.accent};
`

export const StyledBreadcrumbIcon = styled.div`
	width: 12px;
	height: 12px;
	margin: 0 ${({ theme }) => theme.spacing.md};
`

export const StyledBreadcrumbFlex = styled.div`
	display: flex;
	align-items: center;
`
