import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeColor } from '@/styles/theme'

export const StyledInternalLink = styled(Link).withConfig({
	shouldForwardProp: (prop) => !['color'].includes(prop),
})<{ color: keyof ThemeColor }>`
	display: block;
	color: ${({ theme, color }) => theme.color[color]};
`
