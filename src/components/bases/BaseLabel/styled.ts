import styled, { css } from 'styled-components'
import { ThemeColor } from '@/styles/theme'

export const StyledLabel = styled('span').withConfig({
	shouldForwardProp: (prop) => !['variant', 'color'].includes(prop),
})<{
	variant: 'contained' | 'outlined'
	color: keyof ThemeColor
}>`
	display: inline-block;
	height: 22px;
	padding: ${({ theme }) => `0 ${theme.spacing.md}`};
	${({ theme }) => theme.font('xs')};
	text-align: center;
	border-radius: ${({ theme }) => theme['border-radius'].rounded};

	${({ variant, color }) => {
		switch (variant) {
			case 'outlined':
				return css`
					color: ${({ theme }) => theme.color[color]};
					line-height: 22px;
					border: 1px solid ${({ theme }) => theme.color[color]};
				`

			default:
				return css`
					background-color: ${({ theme }) => theme.color[color]};
					color: ${({ theme }) => theme.color.white};
					line-height: 22px;
				`
		}
	}}
`
