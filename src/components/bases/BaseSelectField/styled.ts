import styled, { css } from 'styled-components'

export const StyledSelectFieldWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: ${({ theme }) => theme.spacing.lg};

	&.arrow::before {
		top: calc(50% + 8px);
	}
`

export const StyledSelect = styled.select`
	width: 100%;
	padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xs}`};
	${({ theme }) => theme.font('sm')};
	border-bottom: 1px solid ${({ theme }) => theme.color.main};

	&:focus,
	&:not(:invalid) {
		border-bottom: 1px solid ${({ theme }) => theme.color.accent};
	}

	&:focus + label,
	&:not(:invalid) + label {
		top: ${({ theme }) => theme.spacing.sm};
		${({ theme }) => theme.font('xs')};
		color: ${({ theme }) => theme.color.accent};
	}
`

export const StyledSelectFieldLabel = styled('label').withConfig({
	shouldForwardProp: (prop) => !['required'].includes(prop),
})<{ required?: boolean }>`
	position: absolute;
	top: calc(50% + 8px);
	left: ${({ theme }) => theme.spacing.xs};
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
