import styled, { css } from 'styled-components'

export const StyledTextFieldWrapper = styled.div`
	width: 100%;
`

export const StyledTextFieldInputWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: ${({ theme }) => theme.spacing.lg};
`

export const StyledTextFieldInput = styled('input').withConfig({
	shouldForwardProp: (prop) => !['isError'].includes(prop),
})<{ isError?: boolean }>`
	width: 100%;
	padding: ${({ theme }) => `${theme.spacing.sm} 0`};
	${({ theme }) => theme.font('sm')};
	border-bottom: 1px solid ${({ theme, isError }) => (isError ? theme.color.red : theme.color.main)};
	color: ${({ theme, isError }) => (isError ? theme.color.red : theme.color.black)};

	&:focus,
	&:not(:placeholder-shown) {
		border-bottom: 1px solid ${({ theme, isError }) => (isError ? theme.color.red : theme.color.accent)};
	}

	&:focus ~ label,
	&:not(:placeholder-shown) ~ label {
		top: ${({ theme }) => theme.spacing.sm};
		${({ theme }) => theme.font('xs')};
		color: ${({ theme, isError }) => (isError ? theme.color.red : theme.color.accent)};
	}

	&:read-only {
		cursor: pointer;
		pointer-events: none;
	}
`

export const StyledTextFieldLabel = styled('label').withConfig({
	shouldForwardProp: (prop) => !['required', 'isError'].includes(prop),
})<{ required?: boolean; isError?: boolean }>`
	position: absolute;
	top: calc(50% + 8px);
	left: 0;
	color: ${({ theme }) => theme.color.main};
	transition: ${({ theme }) => theme.transition};
	pointer-events: none;
	transform: translateY(-50%);

	${({ required }) => {
		return (
			required &&
			css`
				&::after {
					content: '*';
					display: inline-block;
					margin-left: ${({ theme }) => theme.spacing.xs};
				}
			`
		)
	}}
`

export const StyledErrorMessage = styled.span`
	margin-top: ${({ theme }) => theme.spacing.sm};
	${({ theme }) => theme.font('xs')};
	color: ${({ theme }) => theme.color.red};
`
