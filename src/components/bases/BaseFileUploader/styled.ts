import styled from 'styled-components'

export const StyledBaseFileUploader = styled.input`
	display: none;
`

export const StyledBaseFileUploaderLabel = styled.label`
	width: 100%;
	margin-top: ${({ theme }) => theme.spacing.sm};
	padding: ${({ theme }) => theme.spacing.sm};
	color: ${({ theme }) => theme.color.accent};
	${({ theme }) => theme.font('sm')};
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.accent};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	cursor: pointer;
`

export const StyledBaseFileUploaderTitle = styled.span`
	display: inline-block;
	color: ${({ theme }) => theme.color.accent};
`

export const StyledBaseFileUploaderText = styled.span`
	display: flex;
	gap: 0 ${({ theme }) => theme.spacing.sm};
	color: ${({ theme }) => theme.color.main};
`
