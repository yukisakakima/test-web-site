import styled from 'styled-components'

export const StyledDefaultLayout = styled.main`
  width: 100%;
  min-height: calc(100vh - 72px - 48px - 48px - 128px);
  margin: ${({ theme }) => theme.spacing['5xl']} 0 ${({ theme }) => theme.spacing['7xl']};
`

export const StyledDefaultLayoutInner = styled.div`
  max-width: ${({ theme }) => theme.mediaQuery(1000)};
  margin: 0 auto;
`
