import styled from 'styled-components'

export const StyledGridItem = styled('div').withConfig({
	shouldForwardProp: (prop) => !['col'].includes(prop),
})<{ col: number }>`
	${({ theme, col }) => theme['col-span'](col)}
`
