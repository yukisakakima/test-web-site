import styled, { css } from 'styled-components'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'

export const StyledHeading = styled('h1').withConfig({
	shouldForwardProp: (prop) => !['fontSize', 'fontWeight', 'color'].includes(prop),
})<{
	fontSize: keyof ThemeFontSize
	fontWeight: 'normal' | 'bold'
	color?: keyof ThemeColor
}>`
	color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black)};
	${({ fontWeight, fontSize }) => {
		switch (fontWeight) {
			case 'bold':
				return css`
					${({ theme }) => theme['font-b'](fontSize)}
				`
			default:
				return css`
					${({ theme }) => theme.font(fontSize)}
					font-weight: normal;
				`
		}
	}};
`

export const StyledHeadingInner = styled.div`
	display: flex;
	align-items: center;
`
