import styled from 'styled-components'
import { ThemeSpacing } from '@/styles/theme'

export const StyledModalAction = styled('div').withConfig({
	shouldForwardProp: (prop) => !['direction', 'gapX', 'gapY'].includes(prop),
})<{
	direction?: 'start' | 'center' | 'end'
	gapX?: keyof ThemeSpacing
	gapY?: keyof ThemeSpacing
}>`
	display: flex;
	align-items: center;
	justify-content: ${({ direction }) => {
		switch (direction) {
			case 'center':
				return 'center'
			case 'end':
				return 'flex-end'

			default:
				return 'flex-start'
		}
	}};
	margin-top: ${({ theme }) => theme.spacing['5xl']};
	row-gap: ${({ theme, gapY }) => (gapY ? theme.spacing[gapY] : undefined)};
	column-gap: ${({ theme, gapX }) => (gapX ? theme.spacing[gapX] : undefined)};
`
