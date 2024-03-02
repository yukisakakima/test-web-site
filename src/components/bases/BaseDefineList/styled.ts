import styled from 'styled-components'

export const StyledDefineList = styled.dl`
	display: grid;
	grid-template-columns: 110px 1fr;
	gap: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing['3xl']}`};
`
