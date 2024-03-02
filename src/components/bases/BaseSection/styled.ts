import styled from 'styled-components'

export const StyledSection = styled('section').withConfig({
	shouldForwardProp: (prop) => !['spacing'].includes(prop),
})<{ spacing?: '5xl' | '6xl' | '7xl' }>`
	margin-top: ${({ theme, spacing }) => (spacing ? theme.spacing[spacing] : undefined)};
`
