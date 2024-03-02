import styled from 'styled-components'

export const StyledImageWrapper = styled.div`
	display: flex;
	overflow: hidden;
	user-select: none;
`

export const StyledImage = styled.img`
	width: 100%;
	height: auto;
	aspect-ratio: 3/2;
	background-color: ${({ theme }) => theme.color.main};
`
