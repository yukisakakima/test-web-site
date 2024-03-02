import styled, { css } from 'styled-components'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'

export const StyledTypography = styled('p').withConfig({
	shouldForwardProp: (prop) => !['fontSize', 'fontWeight', 'color'].includes(prop),
})<{
	fontSize: keyof ThemeFontSize
	fontWeight: 'normal' | 'bold'
	color?: keyof ThemeColor
}>`
	text-align: justify;
	color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black)};
	white-space: pre-line;

	${({ fontWeight, fontSize }) => {
		switch (fontWeight) {
			case 'bold':
				return css`
					${({ theme }) => theme['font-b'](fontSize)}
				`
			default:
				return css`
					${({ theme }) => theme.font(fontSize)}
				`
		}
	}};
`
