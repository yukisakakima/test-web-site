import styled from 'styled-components'
import { ThemeSpacing } from '@/styles/theme'

export const StyledGridLayout = styled('div').withConfig({
	shouldForwardProp: (prop) => !['col', 'gapX', 'gapY'].includes(prop),
})<{
	col: number
	gapX?: keyof ThemeSpacing
	gapY?: keyof ThemeSpacing
}>`
	${({ theme, col }) => theme['grid-layout'](col)};
	row-gap: ${({ theme, gapY }) => (gapY ? theme.spacing[gapY] : undefined)};
	column-gap: ${({ theme, gapX }) => (gapX ? theme.spacing[gapX] : undefined)};
`
