import styled from 'styled-components'

export const StyledCheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	min-height: 18px;
	padding-left: 18px;
`

export const StyledCheckbox = styled.input`
	position: relative;
	margin-left: -18px;
	width: 18px;
	height: 18px;
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	border: 1px solid ${({ theme }) => theme.color.accent};
	background-color: ${({ theme }) => theme.color.white};
	cursor: pointer;

	&:checked {
		background-color: ${({ theme }) => theme.color.accent};
		&::after {
			content: '';
			display: block;
			position: absolute;
			top: calc(50% - 1px);
			left: 50%;
			width: 6px;
			height: 12px;
			transform: translate(-50%, -50%) rotate(45deg);
			border-bottom: 2px solid ${({ theme }) => theme.color.white};
			border-right: 2px solid ${({ theme }) => theme.color.white};
		}
	}
`
