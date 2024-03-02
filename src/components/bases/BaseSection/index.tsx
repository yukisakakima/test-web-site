import { FC, ReactNode } from 'react'
import { StyledSection } from './styled'

interface SectionProps {
  children: ReactNode
  spacing?: '5xl' | '6xl' | '7xl'
}

const BaseSection: FC<SectionProps> = ({ children, spacing }) => {
  return <StyledSection spacing={spacing}>{children}</StyledSection>
}

export default BaseSection
