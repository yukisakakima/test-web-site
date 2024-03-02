import { ElementType, FC, ReactNode } from 'react'
import { StyledSpacing } from './styled'
import { ThemeSpacing } from '@/styles/theme'

interface SpacingProps {
  children: ReactNode
  el?: ElementType
  top?: keyof ThemeSpacing
  right?: keyof ThemeSpacing
  bottom?: keyof ThemeSpacing
  left?: keyof ThemeSpacing
}

const BaseSpacing: FC<SpacingProps> = ({ children, el, top, right, bottom, left }) => {
  return (
    <StyledSpacing as={el} top={top} right={right} bottom={bottom} left={left}>
      {children}
    </StyledSpacing>
  )
}

export default BaseSpacing
