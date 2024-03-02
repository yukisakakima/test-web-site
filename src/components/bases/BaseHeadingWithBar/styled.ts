import styled, { css } from 'styled-components'
import { ThemeFontSize, ThemeColor } from '@/styles/theme'

export const StyledHeadingWithBar = styled('h1').withConfig({
	shouldForwardProp: (prop) => !['fontSize', 'fontWeight', 'color'].includes(prop),
})<{
	fontSize: keyof ThemeFontSize
	fontWeight: 'normal' | 'bold'
	color?: keyof ThemeColor
}>`
	position: relative;
	padding-left: ${({ theme }) => theme.spacing.md};
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

	&::before {
		content: '';
		position: absolute;
		display: block;
		top: 50%;
		left: 0;
		width: 4px;
		height: 24px;
		background-color: ${({ theme }) => theme.color.accent};
		transform: translateY(-50%);
	}
`

export const StyledHeadingWithBarInner = styled.span`
	display: flex;
	align-items: center;
`
