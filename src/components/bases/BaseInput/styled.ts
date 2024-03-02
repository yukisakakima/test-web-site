import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 40px;
	padding: 0 ${({ theme }) => theme.spacing.md};
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.main};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
`

export const StyledInputChildren = styled.div`
	display: inline-flex;
	padding-right: ${({ theme }) => theme.spacing.md};
`

export const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	${({ theme }) => theme.font('md')};
	background-color: ${({ theme }) => theme.color.white};
	&::placeholder {
		color: ${({ theme }) => theme.color.main};
	}
	&:read-only {
		cursor: pointer;
	}
`
