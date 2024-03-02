import styled from 'styled-components'
import { ThemeSpacing } from '@/styles/theme'

export const StyledCard = styled('div').withConfig({
	shouldForwardProp: (prop) => !['py', 'px'].includes(prop),
})<{ py?: keyof ThemeSpacing; px?: keyof ThemeSpacing }>`
	background-color: ${({ theme }) => theme.color.white};
	border-radius: ${({ theme }) => theme['border-radius']['rounded-md']};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	padding: ${({ theme, py, px }) => `${theme.spacing[py ?? '4xl']} ${theme.spacing[px ?? '4xl']}`};
`
